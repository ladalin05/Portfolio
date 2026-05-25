import { ProjectDetail as ProjectDetailSection } from '../components/Sections/ProjectDetail';
import { projects } from '../../utils/data';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === parseInt(id));
    return (
            <div className="relative z-10">
                <ProjectDetailSection project={project} index={parseInt(id)} />
            </div>
    );
}

export default ProjectDetailPage;