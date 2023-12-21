// tourData.js

const tourData = [
    {
        title: "Trekking Adventure",
        subtitle: "Epic Peaks and Majestic Trails",
        images: [
            { url: "https://images.unsplash.com/photo-1623591609259-19c86d6ca734?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "KedarKantha Trek" },
            { url: "https://images.unsplash.com/photo-1637217644936-6b505db635f3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Hampta Pass Trek" },
            { url: "https://images.unsplash.com/photo-1681045905442-3203fb0e6111?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Beas Kund" },
            { url: "https://images.unsplash.com/photo-1572584633593-7022a14ecc82?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Chandrashila Trek" },
        ],
    },
    {
        title: "Beach Escapes",
        subtitle: "Sunny Shores and Seaside Serenity",
        images: [
            { url: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Goa Beach " },
            { url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Puri Beach" },
            { url: "https://images.unsplash.com/photo-1586076900425-c57ea60642b7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Mangalore Beach" },
            { url: "https://images.unsplash.com/photo-1638459032642-c658d3d888c0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Andaman Beach " },
        ],
    },
    {
        title: "Cultural Tours",
        subtitle: "Explore Rich Traditions and History",
        images: [
            { url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cultural Image 1" },
            { url: "https://images.unsplash.com/photo-1641108584959-50c7c49a044c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cultural Image 2" },
            { url: "https://images.unsplash.com/photo-1611640844364-5d6e046b2359?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cultural Image 3" },
            { url: "https://images.unsplash.com/photo-1621377099913-ac1ec4848e52?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cultural Image 4" },
        ],
    },
    {
        title: "Bike Trips",
        subtitle: "Adventurous Roads, Breathtaking Views",
        images: [
            { url: "https://images.unsplash.com/photo-1701599346665-88d37f67fed0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Bike Image 1" },
            { url: "https://images.unsplash.com/photo-1532503344276-8f089fe4e51f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Bike Image 2" },
            { url: "https://images.unsplash.com/photo-1602699191434-4d6358b26afe?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Bike Image 3" },
            { url: "https://plus.unsplash.com/premium_photo-1661897325546-5747eef13150?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Bike Image 4" },
        ],
    },
];

export default tourData;
