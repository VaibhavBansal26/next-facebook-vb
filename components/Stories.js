import StoryCard from "./StoryCard"


const stories = [
    {
        name:"Vaibhav Bansal",
        src:"https://lh3.googleusercontent.com/ogw/ADea4I4ZXDWgS7wyBNe-eXeIZQY5exiJyIJ9lEsgmBtxIw=s32-c-mo",
        profile:"https://lh3.googleusercontent.com/ogw/ADea4I4ZXDWgS7wyBNe-eXeIZQY5exiJyIJ9lEsgmBtxIw=s32-c-mo"
    },
    {
        name:"Elon Musk",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk"
    },
    {
        name:"Jeff Bezos",
        src:"https://links.papareact.com/k2j",
        profile:"https://links.papareact.com/f0p"
    },
    {
        name:"Mark Zuckerberg",
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf"
    },
    {
        name:"Bill Gates",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy"
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story,i) =>(
                <StoryCard name={story.name}
                key={i}
                src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories
