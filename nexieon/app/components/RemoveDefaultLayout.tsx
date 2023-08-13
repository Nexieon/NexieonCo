const removeDefaultLayout = () => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    nav?.remove();
    footer?.remove();
}

export default removeDefaultLayout;