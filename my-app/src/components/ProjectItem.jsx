const ProjectItem = () => {
    const name = "Test1";
    const imgLink = "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_960_720.jpg";
    return (  
        <div className="project-container">
            <img className="project-image" src= { imgLink } alt="Project"/>
            
            <div className="project-details">
                <h2 className="project-title">Project { name }</h2>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
        </div>
    );
}
 
export default ProjectItem;