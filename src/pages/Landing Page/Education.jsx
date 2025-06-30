
const graduationData = [
    {
        level: 'Fourth Year',
        course: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade-Pune',
        university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
        year: '2025-2026',
        grade: 'Appearing',
        highlight: 'Focusing on Data Structures, Algorithms & AI/ML.',
    },
    {
        level: 'Third Year',
        course: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade-Pune',
        university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
        year: '2024-2025',
        grade: '9.31 (Aggregate)',
        highlight: 'Focusing on Data Structures, Algorithms & AI/ML.',
    },
    {
        level: 'Second Year',
        course: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade-Pune',
        university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
        year: '2023-2024',
        grade: '9.51 (Aggregate)',
        highlight: 'Top 5% of the batch.',
    },
    {
        level: 'First Year',
        course: 'B.Tech in Artificial Intelligence and Data Science',
        institution: 'Dr. D. Y. Patil School of Science and Technology, Tathawade-Pune',
        university: 'Dr. D. Y. Patil Vidyapeeth, Pune',
        year: '2022-2023',
        grade: '9.11 (Aggregate)',
        highlight: 'Active member of Coding Club.',
    },
];

const schoolData = [
    {
        level: '12ᵗʰ (HSC)',
        stream: 'Science (PCM with Computer Science)',
        institution: 'Divine Life English Medium School, Ahmedabad',
        university: 'State Board-Gujarat',
        year: '2021-2022',
        grade: '60.00%',
        highlight: 'Won Gold in National Olypaid Math Exam.',
    },
    {
        level: '10ᵗʰ (SSC)',
        stream: 'General Education',
        institution: 'Divine Life English Medium School, Ahmedabad',
        university: 'State Board-Gujarat',
        year: '2019-2020',
        grade: '90.00%',
        highlight: 'School Topper with 90% in Science and Math.',
    },
];

const EducationTable = ({ title, data, isGraduation }) => (
    <>
        <h3 className="text-white text-2xl font-gr md:text-3xl font-semibold mb-4 mt-8">{title}</h3>
        <div className="overflow-hidden mb-10 rounded-2xl border border-[#333]">
            <table className="w-full text-left text-sm text-[#b0b0b0]">
                <thead className="bg-[#1a1a1a] text-[#2FA4FF] uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333] first:border-l-0">Level</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333]">Institution</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333] hidden md:table-cell">University</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333] hidden md:table-cell">Year</th>
                        <th className="px-4 py-3 font-gr border-b border-r border-[#333]">Grade</th>
                        <th className="px-4 py-3 font-gr border-b border-[#333] hidden md:table-cell last:border-r-0">Highlight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((edu, index) => (
                        <tr key={index} className="bg-[#111] hover:bg-[#1e1e1e] transition-colors">
                            <td className="px-4 py-3 font-gr border-b border-r border-[#333] first:border-l-0">
                                <span className="font-semibold text-white">{edu.level}</span>
                                <div className="text-xs text-[#999]">{isGraduation ? edu.course : edu.stream}</div>
                            </td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333]">{edu.institution}</td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333] hidden md:table-cell">{edu.university}</td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333] hidden md:table-cell">{edu.year}</td>
                            <td className="px-4 py-3 border-b font-gr border-r border-[#333]">{edu.grade}</td>
                            <td className="px-4 py-3 border-b font-gr border-[#333] hidden md:table-cell last:border-r-0">{edu.highlight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

const Education = () => (
    <section className="w-full h-auto rounded-4xl px-4 md:px-10 2xl:px-32">
        <h2 className="text-white text-4xl md:text-6xl font-gm mb-8 tracking-tight">
            My <span className="text-[#2FA4FF]">Education</span>
        </h2>

        <EducationTable title="Graduation (B.Tech - Computer Science and Design)" data={graduationData} isGraduation />
        <EducationTable title="Schooling (HSC & SSC)" data={schoolData} isGraduation={false} />
    </section>
);

export default Education;
