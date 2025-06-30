import React, { useEffect, useRef } from "react";

const NumberMorphText = ({ text, className = "" }) => {
    const ref = useRef();

    useEffect(() => {
        const chars = ref.current.querySelectorAll(".nm-char");
        chars.forEach((char, i) => {
            let count = 0;
            let interval;
            setTimeout(() => {
                interval = setInterval(() => {
                    if (count < 8) {
                        char.textContent = /\s/.test(char.dataset.final) ? "\u00A0" : Math.floor(Math.random() * 10);
                        count++;
                    } else {
                        char.textContent = char.dataset.final;
                        clearInterval(interval);
                    }
                }, 30 + Math.random() * 30);
            }, i * 40);
        });
    }, [text]);

    return (
        <span ref={ref} className={className}>
            {text.split("").map((c, i) =>
                c === "\n" ? <br key={i} /> :
                <span key={i} className="nm-char" data-final={c}>{/\s/.test(c) ? "\u00A0" : Math.floor(Math.random() * 10)}</span>
            )}
        </span>
    );
};

export default NumberMorphText;