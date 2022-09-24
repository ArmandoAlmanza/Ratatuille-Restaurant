const Blog = ({ title, imageUrl, description, userName, creationDate }) => {
    return (
        <article className="blog__card card">
            <div className="card__title">
                <h2>{title}</h2>
                <div className="userContent">
                    <div className="userInfo">
                        <p className="title__description">{`Article writen by ${userName}`}</p>
                        <img
                            className="card__image userImage"
                            src={imageUrl}
                            alt="User image"
                        />
                    </div>
                    <small className="title__description">{`Creation date: ${creationDate}`}</small>
                </div>
            </div>
            <div className={`card__content`}>
                <p className="card__description">{description}</p>
            </div>
        </article>
    );
};

export default Blog;
