import { Projects as ProjectsSection } from "../components/Sections/Projects";

const ProjectPage = () => {

    const projects = [
      { title: 'POS Management System', category: 'Retail & commerce', subcategory: 'Point of sale', desc: 'A fast and reliable point-of-sale system built for retail businesses handling sales, inventory tracking, receipts, and daily reports in one seamless interface.', tags: ['Laravel', 'CSS', 'jQuery', 'MySQL'], featured: true,},
      { title: 'Pureclean Laundry', category: 'Cleaning service', desc: 'A booking platform for professional cleaning services — customers can schedule, manage, and track their appointments with ease.', tags: ['Nuxt', 'Laravel', 'Tailwind CSS', 'JQuery', 'MySQL'],},
      { title: 'D2D Laundry', category: 'Laundry service', desc: 'Door-to-door laundry app where users request pickup, track order status in real time, and receive clothes delivered back home.', tags: ['React', 'Nuxt', 'Nodejs', 'MySQL', 'Tailwind CSS'],},
      { title: 'Real Estate', category: 'Property', desc: 'Property listing platform where buyers and renters browse listings, view details, filter by location or price, and connect with agents.', tags: ['React', 'Laravel', 'JQuery', 'MySQL'],},
    ]

    return (
        <div className="relative z-10">
            <ProjectsSection projects={projects} />
        </div>
    )
}

export default ProjectPage;