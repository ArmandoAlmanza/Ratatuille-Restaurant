import Blog from "./Blog";

const users = [
    {
        title: "You should eat here?",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sem consectetur sem varius lacinia condimentum sit amet risus. Pellentesque blandit lacinia tincidunt. Duis consectetur venenatis magna, vel tincidunt nibh varius sit amet. Pellentesque et tincidunt orci. Donec pulvinar eros urna, eu varius leo placerat eget.",
        author: "Armando Almanza",
        image: "/src/assets/userImage.jpg",
        creationDate: "22/08/2022",
    },
    {
        title: "Good food",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sem consectetur sem varius lacinia condimentum sit amet risus. Pellentesque blandit lacinia tincidunt.",
        author: "Mariana Mercado",
        image: "/src/assets/userImage.jpg",
        creationDate: "22/08/2022",
    },
    {
        title: "Best Food Experience!!",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sem consectetur sem varius lacinia condimentum sit amet risus. Pellentesque blandit lacinia tincidunt. Duis consectetur venenatis magna, vel tincidunt nibh varius sit amet. Peortor. Vivamus hendrerit et elit nec commodo. In dictum nunc leo. Morbi cursus justo non luctus luctus. Aliquam gravida enim sed purus euismod, vitae molestie nisi semper. Suspendisse semper leo dolor, sit amet mollis metus viverra ornare.",
        author: "Tania Licea",
        image: "/src/assets/userImage.jpg",
        creationDate: "22/08/2022",
    },
    {
        title: "I need to come back",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sem consectetur sem varius lacinia condimentum sit amet risus. Pellentesque blandit lacinia tinciduns. Sed ullamcorper suscipit ipsum faucibus egestas. Duis ut fringilla tortor. Visi semper. Suspendisse semper leo dolor, sit amet mollis metus viverra ornare.",
        author: "Lorena Cedillo",
        image: "/src/assets/userImage.jpg",
        creationDate: "22/08/2022",
    },
];

const Blogs = () => {
    return (
        <div className="container blogs__container">
            <h1 className="title">See some of the reviews</h1>
            <p className="title__description">
                This are reviews of the peaple hwo visit us
            </p>

            <div className="blogs">
                {users.map((user) => {
                    return (
                        <Blog
                            creationDate={user.creationDate}
                            title={user.title}
                            userName={user.author}
                            description={user.description}
                            imageUrl={user.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Blogs;
