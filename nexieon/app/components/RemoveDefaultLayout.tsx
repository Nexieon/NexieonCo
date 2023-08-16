const removeDefaultLayout = () => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (nav)
        nav?.remove();
    if (footer)
        footer?.remove();
}

export default removeDefaultLayout;