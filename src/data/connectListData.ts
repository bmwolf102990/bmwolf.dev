type ConnectListDataType = {
    item: string;
    icon: string;
    blurb: string;
    link: string;
};

export const bucketListData: ConnectListDataType[] = [
    {
        item: 'GitHub',
        icon: '/github.svg',
        blurb: 'Check out my GitHub to see what I have been coding lately.',
        link: 'https://github.com/bmwolf102990',
    },
    {
        item: 'LinkedIn',
        icon: '/linkedin.svg',
        blurb: 'Cyberstalk me...professionally!',
        link: 'https://linkedin.com/in/bmwolf102990',
    },
    {
        item: 'Snapchat',
        icon: '/snapchat.svg',
        blurb: 'I mostly post pics and vids of my silly fur babies. Click for my Snapcode.',
        link: '/snapcodeBitmoji.svg',
    },
    {
        item: 'Letterboxd',
        icon: '/letterboxd.svg',
        blurb: 'My wife and I love to watch movies. This is the diary of our cinematic exploits.',
        link: 'https://letterboxd.com/bmwolf102990',
    },
    {
        item: 'Apple Music',
        icon: '/itunes.svg',
        blurb: 'I will listen to just about anything except modern country...sorry Mr. Blake Shelton.',
        link: 'https://music.apple.com/profile/bmwolf102990',
    },
    {
        item: 'Steam',
        icon: 'steam.svg',
        blurb: 'The central hub of my gaming life. Leave me a comment.',
        link: 'https://steamcommunity.com/id/bmwolf102990/',
    },
    {
        item: 'Guild Wars',
        icon: 'arenanet.svg',
        blurb: 'The best MMORPG series out there. I mostly play solo, but I am down to join a party.',
        link: '#',
    },
    {
        item: 'Pokémon GO',
        icon: '/pokeball.svg',
        blurb: 'I am addicted to PoGO. My trainer code is 5571 6129 7141.',
        link: '#',
    },
];

export default bucketListData;
