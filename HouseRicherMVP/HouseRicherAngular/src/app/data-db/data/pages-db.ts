export class PagesDb {
    public static wallPage = {
        user: {
            name: 'Chelsea Jones @chelsea',
            image: 'https://via.placeholder.com/640X420',
            address: 'Florida, USA',
            small_image: 'https://via.placeholder.com/150X150'
        },
        feeds: [{label: 'Followers', value: 2000}, {label: 'Following', value: 847}, {label: 'Friends', value: 324}],
        interests: ['Music', 'Drawing', 'Sports', 'Graphic Designing', 'Tourism'],
        friends: [
            {name: 'Domnic Harris', image: 'https://via.placeholder.com/150X150', status: 'online'},
            {name: 'Kayli Brown', image: 'https://via.placeholder.com/150X150', status: 'away'},
            {name: 'Bob Builder', image: 'https://via.placeholder.com/150X150', status: 'online'},
            {name: 'Chelsea Johns', image: 'https://via.placeholder.com/150X150', status: 'dnd'},
            {name: 'Ken Ramirez', image: 'https://via.placeholder.com/150X150', status: 'invisible'},
            {name: 'Steve Smith', image: 'https://via.placeholder.com/150X150', status: 'online'}
        ],
        recent_activities: [
            {
                date: 'Today',
                activities: [
                    {
                        name: 'Mila Alba',
                        image: 'https://via.placeholder.com/150X150',
                        content: 'Mila Alba left a 5 star review on Albama’s House'
                    },
                    {
                        name: 'Bob Builder',
                        image: 'https://via.placeholder.com/150X150',
                        content: 'Callback request from Bob Builder for the property Dimitri House'
                    },
                    {
                        name: 'Tom Moody',
                        image: 'https://via.placeholder.com/150X150',
                        content: 'Congratulations to Tom Moody for joining 10+ club'
                    },
                    {name: 'Norman Dolphi', image: '', content: 'Norman Dolphi is looking for a house in New Jersy, USA'}
                ]
            },
            {
                date: 'Yesterday',
                activities:
                    [
                        {
                            name: 'Kily Johns',
                            image: '',
                            content: 'Agent Kily Johns has added 7 new photos to the property Albama’s House',
                            imageClass: 'bg-light-green'
                        },
                        {
                            name: 'Tom Moody',
                            image: 'https://via.placeholder.com/150X150',
                            content: 'Welcome to a new agent Tom Moody in the Company',
                            images: [
                                'https://via.placeholder.com/640X420',
                                'https://via.placeholder.com/640X420'
                            ]
                        },
                        {
                            name: 'Oliver Shorter',
                            image: '',
                            content: 'Oliver Shorter is looking for an office space in Colorado, USA',
                            imageClass: 'bg-orange'
                        }
                    ]
            }
        ]
    };

    public static wallPagePosts = [
        {
            id: 1,
            user_name: 'Reece Jacklin',
            user_image: 'https://via.placeholder.com/150X150',
            message: 'Had the opportunity to meet Shally today. It was such an amazing experience to talk to someone who is so close to you and shares the same vibe.',
            attachments: [],
            created_at: new Date().setMinutes(new Date().getMinutes() - 42),
            feeds: {
                likes: 1000,
                comments: 120
            },
            comments: [
                {
                    id: 1,
                    name: 'Steve Smith',
                    image: 'https://via.placeholder.com/150X150',
                    created_at: new Date().setMinutes(new Date().getMinutes() - 3),
                    text: 'Woohoo! there you go Kayli. Those are excellent shots. Don’t forget to take me those places :)'
                }
            ]
        }
    ];

    public static searchPageData = [
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model\n' +
                '                        text, and a search for \'lorem ipsum\' will uncover many web sites\n' +
                '                        still in their infancy. Various versions have evolved over the years,\n' +
                '                        sometimes by accident,\n' +
                '                        sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Luxury family home at beach side',
            url: 'www.demo.g-axon.com/drift',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title: 'Rolex & Brown Housing',
            url: 'www.demo.g-axon.com/drift',
            text: 'Sed sed justo risus. Duis congue orci eu erat laoreet fringilla. Vestibulum placerat ipsum sed varius aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer velit arcu, hendrerit ac vestibulum ut, euismod vel tortor. Vestibulum lectus lacus, bibendum vitae est ut, vulputate placerat velit. Phasellus tempus vel augue eu pharetra. Ut elementum massa lectus, non volutpat ante ullamcorper eget. Etiam sed augue quis urna ultricies auctor et vel velit. Suspendisse molestie suscipit molestie.'
        },
        {
            title: 'Seven Bros Studio Homes',
            url: 'www.demo.g-axon.com/drift',
            text: 'Vestibulum mattis ultrices urna, ut lobortis nibh dictum ac. Donec sed ex a massa laoreet sagittis. Pellentesque eu nibh et erat posuere pretium et a felis. Vivamus mattis magna mollis urna luctus facilisis. Ut in nulla a tortor malesuada auctor. Vestibulum mattis quam purus, at dapibus sem laoreet interdum. Cras eget turpis semper mi rhoncus venenatis. Phasellus euismod sapien id lorem facilisis imperdiet. Nunc ultricies diam neque, ac scelerisque nulla pellentesque et. Sed ut risus nibh. Vestibulum varius velit sed dictum vehicula.'
        },
        {
            title: 'Vestibulum eget erat posuere, molestie tellus a, hendrerit est.',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Aliquam eu augue ac risus tempus viverra.',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Phasellus quis sem vel mi varius posuere',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model\n' +
                '                        text, and a search for \'lorem ipsum\' will uncover many web sites\n' +
                '                        still in their infancy. Various versions have evolved over the years,\n' +
                '                        sometimes by accident,\n' +
                '                        sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Sed convallis magna ut viverra porta',
            url: 'www.demo.g-axon.com/drift',
            text: 'Phasellus at suscipit odio. Pellentesque ante neque, malesuada vitae luctus quis, ornare sed odio. In quis urna mauris. Suspendisse accumsan metus arcu, nec molestie purus sollicitudin sit amet. In dignissim fermentum ligula, eget mollis erat eleifend sed. Ut tempus ipsum quis urna mattis, vel fringilla lectus suscipit. Quisque pretium odio vitae ipsum aliquet facilisis.'
        },
        {
            title: 'Sed convallis magna ut viverra porta',
            url: 'www.demo.g-axon.com/drift',
            text: 'Praesent in lacinia ante, at fringilla neque. Maecenas in ante eu mi dignissim tempor ut et lectus. Donec consectetur, dolor at venenatis suscipit, magna lacus malesuada sem, eu mattis libero mi quis enim. Praesent volutpat laoreet ornare. Donec ut leo nec nisl iaculis auctor a et dui. Nullam sed mi eros. Nullam venenatis lorem mattis lacus blandit suscipit ac sed libero.'
        },
        {
            title: 'Aliquam tempor est et hendrerit porta',
            url: 'www.demo.g-axon.com/drift',
            text: 'Vivamus eget arcu et eros porta lobortis. Proin vel velit molestie, faucibus justo et, congue sapien. Ut lectus nisl, laoreet eu venenatis a, semper eget eros. Nam lectus dui, vestibulum eget tincidunt vitae, hendrerit in mauris. Nam hendrerit fermentum felis sit amet convallis. Maecenas nec porta massa. Vestibulum tristique lectus et sem ullamcorper, vitae lacinia tellus posuere. Donec sit amet mauris varius, pretium arcu vel, maximus ante.'
        },
        {
            title: 'Duis ac leo eu odio fermentum dignissim',
            url: 'www.demo.g-axon.com/drift',
            text: 'Donec vitae vehicula ex. Quisque nec ligula ligula. Cras aliquet velit eu porta porta. Nulla cursus lacinia mattis. Pellentesque varius accumsan commodo. Integer malesuada, urna non accumsan posuere, augue nunc aliquam sapien, ac imperdiet sapien justo nec risus. Phasellus eleifend sit amet orci non ornare. Mauris pretium aliquet ligula ut bibendum. Integer ut blandit ante. Donec scelerisque rhoncus facilisis. In rhoncus, augue convallis feugiat congue, ante tellus blandit diam, vitae vulputate odio turpis quis arcu.'
        },
        {
            title: 'Aliquam tempor est et hendrerit porta',
            url: 'www.demo.g-axon.com/drift',
            text: 'Integer et tempor sem. Nunc tincidunt sed libero ac vehicula. Donec lobortis, nisi quis blandit lobortis, turpis tellus malesuada lacus, euismod tempor ex ante vel odio. Donec at ullamcorper urna, non auctor mi. Aenean tempor velit et lectus lacinia blandit. Aliquam viverra, nulla vitae tincidunt feugiat, tellus arcu ultricies elit, nec consequat orci mauris imperdiet libero. Nullam faucibus risus vel nisl vestibulum tempor eu a lectus. Donec diam risus, ullamcorper ullamcorper magna nec, scelerisque pellentesque turpis. Integer lacinia mi vel tempor molestie. Etiam consequat dignissim erat vitae ornare.'
        },
        {
            title: 'Cras auctor augue nec interdum rutrum',
            url: 'www.demo.g-axon.com/drift',
            text: 'Aliquam in turpis quis velit sodales ultricies a a elit. Vestibulum mi diam, viverra ac nulla ut, molestie luctus leo. Fusce sit amet finibus velit. Ut ut lorem nulla. Nunc placerat, elit ac dictum porta, purus ante viverra tellus, non mollis ipsum nisl sodales lacus. Proin ex sapien, ultricies ac justo ut, semper dignissim felis. Maecenas velit eros, sollicitudin ac dapibus ac, rhoncus sed mi. Sed facilisis ante non aliquam euismod. Sed sed urna a sem egestas maximus in non diam. Praesent eget purus sit amet dui congue vehicula eu a risus. Cras pharetra, erat vitae condimentum tristique, tellus mauris elementum lorem, sed scelerisque mauris nunc et dolor. Pellentesque eget viverra dolor. Vestibulum accumsan enim nec faucibus sollicitudin. Aenean ligula tortor, sollicitudin sit amet magna sit amet, consectetur sollicitudin metus. In et interdum arcu.'
        },
        {
            title: 'In eget dui sed augue pharetra aliquam',
            url: 'www.demo.g-axon.com/drift',
            text: 'Nullam pharetra tortor est, at aliquam mi imperdiet sed. Aenean lacus neque, luctus eget elit quis, iaculis semper nunc. Aenean eget aliquam tortor. Cras sed porta nisi. Nam congue justo metus, et dignissim sapien semper nec. Donec consectetur hendrerit purus at rutrum. Integer non turpis quis tellus ultrices dapibus tempor in turpis. Morbi in felis a leo mattis posuere vel sed tortor. Nam metus orci, mollis et tristique quis, consequat et quam.'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model\n' +
                '                        text, and a search for \'lorem ipsum\' will uncover many web sites\n' +
                '                        still in their infancy. Various versions have evolved over the years,\n' +
                '                        sometimes by accident,\n' +
                '                        sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model\n' +
                '                        text, and a search for \'lorem ipsum\' will uncover many web sites\n' +
                '                        still in their infancy. Various versions have evolved over the years,\n' +
                '                        sometimes by accident,\n' +
                '                        sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Praesent congue ipsum a eleifend scelerisque',
            url: 'www.demo.g-axon.com/drift',
            text: 'Phasellus pharetra eros in gravida mattis. Vestibulum nisi arcu, condimentum ut velit eu, vestibulum placerat tortor. Praesent sit amet tincidunt sapien, ut vestibulum nisl. Sed commodo massa mi, sit amet porttitor est imperdiet in. Duis at orci eleifend mauris volutpat ultrices eget quis nisl. Proin aliquam laoreet tellus suscipit tincidunt. Aenean imperdiet nisi at lorem maximus bibendum. Sed euismod fermentum tincidunt. Duis varius est sit amet dolor lobortis, vel fringilla velit ullamcorper. Phasellus pellentesque sagittis lorem sed eleifend. Aenean sit amet nisi sed arcu tincidunt rutrum id at est. Ut euismod tincidunt ultrices. Nunc imperdiet odio vitae erat consequat malesuada. Phasellus condimentum leo in augue rhoncus feugiat. Sed vitae lobortis elit. Maecenas purus nulla, egestas sed ipsum finibus, congue imperdiet mauris.'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                '\n'
        },
        {
            title: 'Drift Admin Theme',
            url: 'www.demo.g-axon.com/drift',
            text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
            title: 'Ut non leo porta, ultrices arcu in, bibendum tortor',
            url: 'www.demo.g-axon.com/drift',
            text: 'Ut a magna dui. Nunc quis blandit purus. Sed augue nisl, convallis eget lectus eu, commodo eleifend est. Proin egestas odio metus, vel convallis tellus suscipit ut. Ut sed tincidunt nunc, ut pellentesque lorem. Etiam sagittis turpis quis mattis convallis. Sed non massa tellus. Phasellus fringilla tortor id pellentesque porttitor. Etiam gravida viverra laoreet. Praesent egestas augue eu elit dapibus convallis. Integer dictum risus sed arcu ullamcorper aliquet. Donec nulla nunc, auctor non aliquam eu, luctus nec nisl. Praesent leo nulla, pulvinar at est nec, condimentum rutrum est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            title: 'Quisque ultricies quam eu rhoncus ullamcorper',
            url: 'www.demo.g-axon.com/drift',
            text: 'Cras nisl velit, placerat sit amet porttitor eget, malesuada vitae arcu. Curabitur lacus velit, interdum et nisi a, lacinia ullamcorper orci. Praesent et sagittis diam. Donec in nisl eu velit convallis aliquam semper ac dolor. Duis ante risus, porta non vehicula ut, dictum et neque. Etiam consectetur id sapien ut fermentum. Aliquam non tempor justo, vel suscipit ipsum.'
        }
    ];

    public static profilePageBannerData = {
        user: {name: 'Reece Jacklin', address: 'Florida, USA', image: 'https://via.placeholder.com/150X150'},
        feeds: [{label: 'Followers', value: 2000}, {label: 'Following', value: 847}, {label: 'Friends', value: 324}]
    };

    public static profilePageContentData = {
        contact_detail: {email: 'kiley.brown@example.com', website: 'example.com', mobile: '+1-987 (454) 987'},
        about_user: {
            company: 'G-axon Tech Pvt. Ltd.',
            birthday: 'Oct 25, 1984',
            university: 'Oxford University',
            hometown: 'Switzerland',
            current_city: 'London',
            members: [
                {name: 'Steve Smith', image: 'https://via.placeholder.com/150X150'},
                {name: 'Alex Dolgove', image: 'https://via.placeholder.com/150X150'},
                {name: 'Reece Jacklin', image: 'https://via.placeholder.com/150X150'},
                {name: 'Selena', image: 'https://via.placeholder.com/150X150'},
            ]
        },
        friends: [
            {name: 'Domnic Harris', image: 'https://via.placeholder.com/150X150', status: 'online'},
            {name: 'Kayli Brown', image: 'https://via.placeholder.com/150X150', status: 'away'},
            {name: 'Bob Builder', image: 'https://via.placeholder.com/150X150', status: 'online'},
            {name: 'Chelsea Johns', image: 'https://via.placeholder.com/150X150', status: 'dnd'},
            {name: 'Ken Ramirez', image: 'https://via.placeholder.com/150X150', status: 'invisible'},
            {name: 'Steve Smith', image: 'https://via.placeholder.com/150X150', status: 'online'}
        ],
        events: [
            {
                category: 'music concert',
                title: 'Veld Music Festival',
                desc: 'Single family home at beach side. Enjoy the beach time daily with home at beach side. Enjoy the beach time daily with family home at beach side...',
                start_date: 'Oct 23, 2019',
                address: 'Downsview Park, Toronto, Ontario',
                tag: 'featured',
                image: 'https://via.placeholder.com/640X420'
            },
            {
                category: 'music concert',
                title: 'Veld Music Festival',
                desc: 'Single family home at beach side. Enjoy the beach time daily with home at beach side. Enjoy the beach time daily with family home at beach side...',
                start_date: 'Oct 23, 2019',
                address: 'Downsview Park, Toronto, Ontario',
                tag: 'featured',
                image: 'https://via.placeholder.com/640X420'
            },
            {
                category: 'music concert',
                title: 'Veld Music Festival',
                desc: 'Single family home at beach side. Enjoy the beach time daily with home at beach side. Enjoy the beach time daily with family home at beach side...',
                start_date: 'Oct 23, 2019',
                address: 'Downsview Park, Toronto, Ontario',
                tag: 'featured',
                image: 'https://via.placeholder.com/640X420'
            }
        ]
    };
}
