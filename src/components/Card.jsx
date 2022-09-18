const Card = ({ project }) => {
  return (
    <div>
      <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={project.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {project.subtitle}
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{project.topic[0]}</div>
                <div className="badge badge-outline">{project.topic[1]}</div>
              </div>
            </h2>
            <p>{project.title}</p>
            <p className="leading-relaxed">{project.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
