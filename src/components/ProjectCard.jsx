function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-topbar">
        <span className="project-card-index">/{project.title}</span>

      </div>
      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="project-card-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-card-tag">{tag}</span>
            ))}
          </div>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <span>VIEW PROJECT</span>
            <svg
              className="project-card-link-icon"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
