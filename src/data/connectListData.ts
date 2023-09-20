type ConnectListDataType = {
    item: string;
    icon: string;
    blurb: string;
    link: string;
};

export const bucketListData: ConnectListDataType[] = [
    {
        item: 'GitHub',
        icon: '/github_logo.svg',
        blurb: 'Check out my GitHub to see what I have been coding lately.',
        link: '#',
    },
    {
        item: 'LinkedIn',
        icon: '/linkedin_logo.svg',
        blurb: 'Cyberstalk me...professionally!',
        link: '#',
    },
    {
        item: 'Snapchat',
        icon: '/snapchat_logo.svg',
        blurb: 'I mostly post pics and vids of my silly fur babies. Click for my Snapcode.',
        link: '/snapcodeBitmoji.svg',
    },
    {
        item: 'Letterboxd',
        icon: '/letterboxd_logo.png',
        blurb: 'My wife and I love to watch movies. This is the diary of our exploits.',
        link: '#',
    },
    {
        item: 'Apple Music',
        icon: '/itunes_logo.png',
        blurb: 'I will listen to just about anything except modern country...sorry Mr. Blake Shelton.',
        link: '#',
    },
    {
        item: 'Guild Wars',
        icon: '/guild_wars_logo.png',
        blurb: 'In my opinion, the best MMORPG out there. I play both GW & GW2. I mostly play solo, but I am down to join a party.',
        link: '#',
    },
    {
        item: 'Pokémon GO',
        icon: '/pokeball_logo.png',
        blurb: 'I am addicted to PoGO. My trainer code is 5571 6129 7141. Gifts, trades, raids...I am in it to win it!',
        link: '#',
    },
];

export default bucketListData;
