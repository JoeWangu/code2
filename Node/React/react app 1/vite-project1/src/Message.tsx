function Message() {
    const name = "Dosh"
    if (name) 
        return <h1>Hello {name}</h1>;
    return <h1>Hi World</h1>
}

export default Message;