import React, { useEffect, useState } from 'react'

const API_URL = 'http://localhost:5000/api/projects' // Change to your backend URL
const CLOUDINARY_UPLOAD_PRESET = 'my_unsigned_preset' // Replace with your Cloudinary unsigned preset
const CLOUDINARY_CLOUD_NAME = 'dhyvcn8mg' // Replace with your Cloudinary cloud name

const initialForm = {
    title: '',
    description: '',
    year: '',
    image: '',
    tags: '',
}

const AdminPage = () => {
    const [projects, setProjects] = useState([])
    const [form, setForm] = useState(initialForm)
    const [editingId, setEditingId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [uploading, setUploading] = useState(false)

    // Fetch projects
    const fetchProjects = () => {
        setLoading(true)
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setProjects(Array.isArray(data) ? data : data.projects || []))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    // Handle form input
    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    // Handle image upload to Cloudinary
    const handleImageUpload = async e => {
        const file = e.target.files[0]
        if (!file) return
        setUploading(true)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        try {
            const res = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
                { method: 'POST', body: formData }
            )
            const data = await res.json()
            setForm(f => ({ ...f, image: data.secure_url }))
        } catch (err) {
            alert('Image upload failed!')
        }
        setUploading(false)
    }

    // Add or update project
    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()) }
        if (editingId) {
            await fetch(`${API_URL}/${editingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
        } else {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
        }
        setForm(initialForm)
        setEditingId(null)
        fetchProjects()
    }

    // Edit project
    const handleEdit = project => {
        setForm({ ...project, tags: project.tags.join(', ') })
        setEditingId(project._id)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Delete project
    const handleDelete = async id => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            setLoading(true)
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            fetchProjects()
        }
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-gb mb-8 text-[#2FA4FF]">Admin: Manage Projects</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#181818] rounded-2xl p-8 mb-12 border border-[#222] shadow-xl space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-[#9D9D9D] font-gr">Title</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="w-full p-3 rounded-lg bg-[#111] border border-[#333] text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-[#9D9D9D] font-gr">Year</label>
                            <input
                                name="year"
                                value={form.year}
                                onChange={handleChange}
                                placeholder="Year"
                                className="w-full p-3 rounded-lg bg-[#111] border border-[#333] text-white"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block mb-2 text-[#9D9D9D] font-gr">Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className="w-full p-3 rounded-lg bg-[#111] border border-[#333] text-white"
                                rows={2}
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-[#9D9D9D] font-gr">Image URL</label>
                            <div className="flex items-center gap-2">
                                <input
                                    name="image"
                                    value={form.image}
                                    onChange={handleChange}
                                    placeholder="Image URL or upload below"
                                    className="w-full p-3 rounded-lg bg-[#111] border border-[#333] text-white"
                                    required
                                />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="mt-2 block w-full text-sm text-[#9D9D9D] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2FA4FF] file:text-black hover:file:bg-[#1e90ff]"
                                disabled={uploading}
                            />
                            {uploading && <div className="text-xs text-[#2FA4FF] mt-1">Uploading...</div>}
                            {form.image && (
                                <img src={form.image} alt="Preview" className="mt-2 w-32 h-20 object-cover rounded-lg border border-[#333]" />
                            )}
                        </div>
                        <div>
                            <label className="block mb-2 text-[#9D9D9D] font-gr">Tags (comma separated)</label>
                            <input
                                name="tags"
                                value={form.tags}
                                onChange={handleChange}
                                placeholder="e.g. React, Node.js, MongoDB"
                                className="w-full p-3 rounded-lg bg-[#111] border border-[#333] text-white"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-full bg-[#2FA4FF] text-black font-gb hover:bg-[#1e90ff] transition"
                            disabled={loading || uploading}
                        >
                            {editingId ? 'Update Project' : 'Add Project'}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={() => { setForm(initialForm); setEditingId(null); }}
                                className="px-8 py-3 rounded-full bg-[#333] text-white font-gb hover:bg-[#222] transition"
                                disabled={loading}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                <div className="overflow-x-auto rounded-2xl border border-[#222] bg-[#181818] shadow-xl">
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="bg-[#222] text-[#2FA4FF]">
                                <th className="p-4 font-gr">Image</th>
                                <th className="p-4 font-gr">Title</th>
                                <th className="p-4 font-gr">Year</th>
                                <th className="p-4 font-gr">Tags</th>
                                <th className="p-4 font-gr">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project._id} className="border-t border-[#222] hover:bg-[#222] transition">
                                    <td className="p-4">
                                        <img src={project.image} alt={project.title} className="w-20 h-12 object-cover rounded-lg border border-[#333]" />
                                    </td>
                                    <td className="p-4">{project.title}</td>
                                    <td className="p-4">{project.year}</td>
                                    <td className="p-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-[#222] text-[#2FA4FF] text-xs border border-[#333]">{tag}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleEdit(project)}
                                            className="mr-2 px-4 py-2 rounded-full bg-[#2FA4FF] text-black font-gb hover:bg-[#1e90ff] transition"
                                            disabled={loading}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="px-4 py-2 rounded-full bg-red-600 text-white font-gb hover:bg-red-800 transition"
                                            disabled={loading}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-[#9D9D9D]">No projects found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminPage