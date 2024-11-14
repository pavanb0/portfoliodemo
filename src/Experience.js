import './Experience.css'
export default function Experience() {
    return (
        <section id="experience">
            <div className="custom-card">
                <h2>Experience</h2>

                <div className="Experience-item">
                    <h3>Design Accent</h3>
                    <p>Software Developer, June 2024 - Present</p>
                    <p>Goregaon, Mumbai</p>
                    <a href="https://www.design-accent.com/" target="_blank" rel="noopener noreferrer">https://www.design-accent.com/</a>

                    <ul>
                        <li>
                            <strong>uniquestaysindia:</strong> Engineered a property rental system with SQL-driven day-wise pricing. Enhanced user experience by implementing seamless property booking and dynamic pricing features using .NET Framework and C#.
                        </li>
                        <li>
                            <strong>Events Genie Web App:</strong> Developed a virtual live event platform with product showcasing and live chat capabilities for registered users. Improved user engagement and interaction through intuitive design and performance optimization, leveraging Angular and JavaScript.
                        </li>
                        <li>
                            <strong>HRBS (Health Reactive Business System):</strong> Designed and implemented a patient management system for healthcare providers, streamlining prescription delivery and comprehensive patient tracking. Utilized SQL, .NET Framework, and C# to ensure compliance with medical regulations, optimize communication, and prioritize patient confidentiality.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
}
