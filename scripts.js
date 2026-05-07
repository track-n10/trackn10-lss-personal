// Set current year
function updateFooterYear() {
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

// Legacy tab API now redirects to real pages.
function filterCategory(category) {
    const routes = {
        all: 'index.html',
        music: 'music.html',
        books: 'books.html',
        vynils: 'vinyls.html',
        vinyls: 'vinyls.html',
        others: 'links.html'
    };
    window.location.href = routes[category] || 'index.html';
}

function initializeActiveNavigation() {
    const currentPage = document.body ? document.body.dataset.page : '';
    document.querySelectorAll('[data-nav-page]').forEach(link => {
        const isActive = link.dataset.navPage === currentPage;
        link.classList.toggle('primary', isActive);
        link.classList.toggle('secondary', !isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// Carousel Scroll Logic
function scrollCarousel(carouselId, direction) {
    const container = document.getElementById(carouselId);
    if (!container) return;
    const scrollAmount = 260; // Approximate width of one slide
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

        // ============================================
        // STREAMING MODAL FUNCTIONALITY
        // ============================================

        // Streaming platform data for each release
        const releaseData = {
            // SINGLES
            'do-not-breathe': {
                title: 'DO NOT BREATHE',
                type: 'Single',
                cover: 'DO-NOT-BREATHE-artcover.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/4UziyVFFPxt0xJpwLPm37T?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/track/4UziyVFFPxt0xJpwLPm37T',
                    apple: 'https://geo.music.apple.com/us/album/do-not-breathe/1895805673?i=6764493353&app=music&ls=1',
                    tidal: 'http://www.tidal.com/track/519993474',
                    youtube: 'https://music.youtube.com/watch?v=C5cOL2xRzCM',
                    soundcloud: 'https://soundcloud.com/track-n10/do-not-breathe?si=d1085528a8764ff28e05f0b2d388b33d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    amazon: 'https://music.amazon.com/tracks/B0GYVVZ5QZ/?ref=dm_ff_amazonmusic_3p',
                    pandora: 'https://www.pandora.com/TR:203898500',
                    beatport: '',
                    bandcamp: 'https://track-n10.bandcamp.com/track/do-not-breathe',
                    netease: '',
                    deezer: 'https://www.deezer.com/track/3991411781',
                    audiomack: 'https://audiomack.com/track-n10/song/do-not-breathe',
                    boomplay: 'https://www.boomplay.com/songs/248121665?srModel=openapi_featurefm',
                    anghami: '',
                    flo: 'https://www.music-flo.com/detail/album/454736176/albumtrack',
                    joox: '',
                    qobuz: 'https://open.qobuz.com/album/l08q6d4a1ci55'
                }
            },
            'killed-on-my-dancefloor': {
                title: 'Killed Me On My Dancefloor',
                type: 'Single',
                cover: 'killed-on-my-dancefloor-artcover.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/590sLu3s920fUkkPoS50pQ?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/track/590sLu3s920fUkkPoS50pQ',
                    apple: 'https://geo.music.apple.com/us/album/killed-me-on-my-dancefloor/1888559325?i=1888559386&app=music&ls=1',
                    tidal: 'http://www.tidal.com/track/510546445',
                    youtube: 'https://music.youtube.com/watch?v=cdUYNDQ6oEk',
                    soundcloud: 'https://soundcloud.com/track-n10/sets/killed-me-on-my-dancefloor',
                    amazon: 'https://music.amazon.com/tracks/B0GV3636H8/?ref=dm_ff_amazonmusic_3p',
                    pandora: 'https://pandora.app.link/?$desktop_url=https%3A%2F%2Fwww.pandora.com%2Fartist%2Ftrack-n10%2Fkilled-me-on-my-dancefloor%2Fkilled-me-on-my-dancefloor%2FTR4t75Xq7rhjwl2&$ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Ftrack%3Ftoken%3DTR%3A199398813&$android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Ftrack%3Ftoken%3DTR%3A199398813&~channel=Partner%20Catalog%20Search%20API',
                    beatport: '',
                    bandcamp: 'https://track-n10.bandcamp.com/track/killed-me-on-my-dancefloor',
                    netease: 'https://music.163.com/album?id=368133578&uct2=U2FsdGVkX1+Ti8JrMyoG76x4MSFmZyZ0sbwQg7RxIXM=',
                    deezer: 'https://www.deezer.com/track/3924433801',
                    audiomack: 'https://audiomack.com/track-n10/song/killed-me-on-my-dancefloor-1?utm_source=featurefm&utm_campaign=onelink&utm_medium=website',
                    boomplay: 'https://www.boomplay.com/albums/128503889?from=artists&srModel=COPYLINK&srList=WEB&share_content=album&share_channel=copylink&share_platform=web',
                    anghami: '',
                    flo: 'https://www.music-flo.com/detail/album/452836767/albumtrack',
                    joox: '',
                    qobuz: 'https://open.qobuz.com/album/ssindsui1x0sq'
                }
            },
            'gravity': {
                title: 'GRAVITY',
                type: 'Single',
                cover: 'GRAVITY-cover.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/67YxJhR1kmjsZmICpiC9X0?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify:'https://open.spotify.com/intl-pt/track/67YxJhR1kmjsZmICpiC9X0?si=3687c6679c14418b',
                    apple: 'https://geo.music.apple.com/pt/album/_/1876353886?app=music&at=1000lHKX&ct=linktree_http&i=1876353888&itscg=30200&itsct=lt_m&ls=1&mt=1',
                    tidal: 'https://listen.tidal.com/track/497521583',
                    youtube: 'https://music.youtube.com/watch?v=Xsl9Fadyfhs',
                    soundcloud: 'https://soundcloud.com/track-n10/sets/gravity-328039287',
                    amazon: 'https://music.amazon.com/albums/B0GMKC7WQ8?trackAsin=B0GMK3B759',
                    pandora: 'https://www.pandora.com/TR:192506662',
                    beatport: 'https://www.beatport.com/pt/track/gravity-pulling-me-makes-me-wanna-sped-up/24023109',
                    bandcamp: 'https://track-n10.bandcamp.com/album/gravity',
                    netease: 'https://music.163.com/album?id=361564841&uct2=U2FsdGVkX1+Pimw0z7ZXtDdnm9tMIMwPW597K6CHrTk=',
                    deezer: 'https://www.deezer.com/track/3833050861',
                    audiomack: 'https://audiomack.com/song/track-n10/gravity-pulling-me-makes-me-wanna-sped-up-sped-up?utm_source=featurefm&utm_campaign=onelink&utm_medium=website',
                    boomplay: 'https://www.boomplay.com/songs/237287404?srModel=COPYLINK&srList=WEB&share_content=music&share_channel=copylink&share_platform=web',
                    anghami: '',
                    flo: 'https://www.music-flo.com/detail/track/574632535/details',
                    qobuz: 'https://open.qobuz.com/track/392066677'
                }
            },
            'friend-s2-pengyou': {
                title: 'FRIEND S2 PENGYOU',
                type: 'Single',
                cover: 'friens-cover.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/143MIKRgZT17arNNh4qyX5?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/track/143MIKRgZT17arNNh4qyX5',
                    apple: 'https://geo.music.apple.com/us/album/friend-s2-pengyou/1874401229?i=1874401230&app=music&ls=1',
                    tidal: 'http://www.tidal.com/track/494307461',
                    youtube: 'https://music.youtube.com/watch?v=Ap3suzZ1Qlg',
                    soundcloud: 'https://soundcloud.com/track_n10-music/friend-s2-pengyou?si=c8bee1a9a3224a7da225e14962736588&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    amazon: 'https://music.amazon.com/tracks/B0GKHVXYPW/?ref=dm_ff_amazonmusic_3p',
                    pandora: 'https://www.pandora.com/TR:191285753',
                    beatport: 'https://www.beatport.com/release/friend-s2-pengyou-feat-leonardo-sales-santos/5869946',
                    bandcamp: 'https://track-n10.bandcamp.com/track/friend-s2-pengyou',
                    deezer: 'https://www.deezer.com/track/3811722802',
                    audiomack: 'https://audiomack.com/track-n10/song/friend-s2-pengyou-feat-leonardo-sales-santos',
                    boomplay: 'https://www.boomplay.com/songs/235790388?from=artists&srModel=COPYLINK&srList=WEB&share_content=music&share_channel=copylink&share_platform=web',
                    anghami: 'https://play.anghami.com/song/1256285022',
                    flo: 'https://www.music-flo.com/detail/album/449661447/albumtrack',
                    netease: 'https://music.163.com/album?id=362872675&uct2=U2FsdGVkX1+eSKL97rJUZqnYzf3uzGUypruLZYcnrb0=',
                    qobuz: 'https://open.qobuz.com/album/zrkbf7kzjb9i4'
                }
            },
            'clubby-freestyle': {
                title: 'CLUBBY FREESTYLE',
                type: 'Single',
                cover: 'clubby freestyle cover.jpg',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/4qEPVlsHoFVuRtfiU7kBc6?utm_source=generator',
                    height: 352
                },
                links: {
                    spotify: 'https://open.spotify.com/track/4qEPVlsHoFVuRtfiU7kBc6',
                    apple: 'https://music.apple.com/pt/song/clubby-freestyle/1869566198',
                    tidal: 'https://listen.tidal.com/track/490055419',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lw1F1kwsBbyzB4wep4pCKSRUoO34HxbZg&si=R0wQesNJW3nwUuOX',
                    soundcloud: 'https://soundcloud.com/track_n10-music/clubby-freestyle?si=507e76c3c39140b3b0d484781f4ce3c8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
                    amazon: 'https://music.amazon.com/albums/B0GH3KV6SX?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=PT&ref=dm_sh_mmmsSClspnp01zgzZARxKH1Hb&trackAsin=B0GH3BJH8R',
                    pandora: 'https://www.pandora.com/TR:189163661',
                    beatport: 'https://www.beatport.com/pt/release/clubby-freestyle/5835003',
                    bandcamp: 'https://track-n10.bandcamp.com/track/clubby-freestyle',
                    netease: 'https://y.music.163.com/m/song?id=3343105064&userid=13850510204&dlt=0846',
                    deezer: 'https://www.deezer.com/track/3777119802',
                    audiomack: 'https://audiomack.com/track-n10/song/clubby-freestyle?share-user-id=165688405',
                    boomplay: 'https://www.boomplay.com/songs/233299607?from=artists&srModel=COPYLINK&srList=WEB&share_content=music&share_channel=copylink&share_platform=web',
                    anghami: 'https://play.anghami.com/song/1252696509',
                    flo: 'https://www.music-flo.com/detail/album/448959745/albumtrack',
                    joox: 'https://www.joox.com/hk/album/TaByCPbQQ8fZP+f+EPTCvA==',
                    qobuz: 'https://open.qobuz.com/track/384336937'
                }
            },
            'human-after-all': {
                title: 'HUMAN AFTER ALL/OVER AGAIN',
                type: 'Double Single',
                cover: 'https://live.staticflickr.com/65535/55025983784_c0d245234d_c.jpg',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/1KY3zzxYh3eSOUnmPMXEDM?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/1KY3zzxYh3eSOUnmPMXEDM',
                    apple: 'https://geo.music.apple.com/album/_/1860161849',
                    tidal: 'https://listen.tidal.com/album/480538431',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mMui2x370ed4_IOIderDhoHQDiWJUhTEs&si=QfESsXP2pH2uyH4u',
                    soundcloud: 'https://soundcloud.com/track-n10/sets/human-after-all-over-again',
                    amazon: 'https://music.amazon.com/albums/B0G62Q773S',
                    pandora: 'https://www.pandora.com/AL:57724591',
                    beatport: 'https://www.beatport.com/release/human-after-all-over-again/5835004',
                    bandcamp: 'https://trackn10.bandcamp.com/album/human-after-all-over-again',
                    netease: 'http://music.163.com/album/354063421/?userid=13850510204',
                    deezer: 'https://www.deezer.com/br/album/874163202',
                    audiomack: 'https://audiomack.com/track-n10/album/human-after-all-over-again',
                    boomplay: 'https://www.boomplay.com/albums/121294489',
                    anghami: 'https://play.anghami.com/album/1079432085?refer=featurefm',
                    flo: 'https://www.music-flo.com/detail/album/447052220/albumtrack',
                    joox: 'https://www.joox.com/hk/album/wSo3Zht_hGUQKkx9D1meTQ==',
                    qobuz: 'https://open.qobuz.com/album/dompxixho6e7h'
                }
            },
            'iconic-remix': {
                title: 'ICONIC (TRACK_N10 Remix)',
                type: 'Remix Single',
                cover: 'https://live.staticflickr.com/65535/55025731251_d696d20924_c.jpg',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/7xVrwByPQ3WW6j0jyFSjYK?utm_source=generator',
                    height: 352
                },
                links: {
                    spotify: 'https://open.spotify.com/track/7xVrwByPQ3WW6j0jyFSjYK',
                    apple: 'https://music.apple.com/song/iconic-track-n10-remix/1852288939',
                    tidal: 'https://listen.tidal.com/track/472262807',
                    youtube: 'https://music.youtube.com/watch?v=EoUYuydLLiw',
                    soundcloud: 'https://soundcloud.com/track-n10/iconic-track_n10-remix',
                    amazon: 'https://music.amazon.com/albums/B0G189B9WF?trackAsin=B0G18D4HB3',
                    pandora: 'https://www.pandora.com/TR:179351166',
                    beatport: '',
                    bandcamp: 'https://track-n10.bandcamp.com/track/iconic-track-n10-remix',
                    netease: 'https://y.music.163.com/m/song?id=3315500290&userid=13850510204&dlt=0846',
                    deezer: 'https://www.deezer.com/track/3642901752',
                    audiomack: '',
                    boomplay: 'https://www.boomplay.com/songs/222534997',
                    anghami: 'https://play.anghami.com/song/1238360443?refer=featurefm',
                    flo: 'https://www.music-flo.com/detail/track/561402279/details',
                    joox: 'https://www.joox.com/hk/single/tAihJLzjp+rsWAhk9c_s5Q==',
                    qobuz: 'https://open.qobuz.com/track/367622941'
                }
            },
            'famous': {
                title: 'FAMOUS (THAT AMOUS S2)',
                type: 'Single',
                cover: 'https://live.staticflickr.com/65535/55025983769_9ae54324af_c.jpg',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/track/74jIYF5lU82HMQhpxRKSya?utm_source=generator',
                    height: 352
                },
                links: {
                    spotify: 'https://open.spotify.com/track/74jIYF5lU82HMQhpxRKSya',
                    apple: 'https://geo.music.apple.com/album/_/1855251927',
                    tidal: 'https://listen.tidal.com/track/475238054',
                    youtube: 'https://music.youtube.com/watch?v=k0FqO35W88U&si=dWgViEtg85q14jd7',
                    soundcloud: 'https://soundcloud.com/track-n10/famous',
                    amazon: 'https://music.amazon.com/albums/B0G2YT6862?trackAsin=B0G2YN5SPQ',
                    pandora: 'https://www.pandora.com/TR:181097686',
                    beatport: 'https://www.beatport.com/track/famous/22706105',
                    bandcamp: 'https://track-n10.bandcamp.com/track/famous',
                    netease: 'https://y.music.163.com/m/song?id=3319792051&userid=13850510204&dlt=0846',
                    deezer: 'https://www.deezer.com/album/859666272',
                    audiomack: 'https://audiomack.com/track-n10/song/famous?share-user-id=165688405',
                    boomplay: 'https://www.boomplay.com/songs/224080488?srModel=COPYLINK&srList=WEB&share_content=music&share_channel=copylink&share_platform=web',
                    anghami: 'https://play.anghami.com/song/1241068083?refer=featurefm',
                    flo: 'https://www.music-flo.com/detail/album/446095040/albumtrack', 
                    joox: 'https://www.joox.com/hk/album/F8+q2cakRdaSp3yhBZyAkQ==',
                    qobuz: 'https://open.qobuz.com/track/370253013'
                }
            },
            // ALBUMS
            'track-n10-full-digital-breakdown': {
                title: 'TRACK_N10 (The Digital Breakdown)',
                type: 'Album',
                cover: 'TRACKN10-Full-Digital-Breakdown-cover.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/5AemgCF0qzedJPVtQcZN8t?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/5AemgCF0qzedJPVtQcZN8t',
                    apple: 'https://geo.music.apple.com/us/album/track-n10-the-digital-breakdown/1885733483?app=music&ls=1',
                    tidal: 'http://www.tidal.com/album/507569525',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_n3CUiRCqZX-Tn6XGkdy9sx9SVXi6ihoKQ&si=XdKwCn01BpVtoiuo',
                    soundcloud: 'https://soundcloud.com/track-n10/sets/track_n1',
                    amazon: 'https://music.amazon.com/albums/B0GSS68B7M?ref=dm_ff_amazonmusic_3p',
                    pandora: 'https://pandora.app.link/?$desktop_url=https%3A%2F%2Fwww.pandora.com%2Fartist%2Ftrack-n10%2Ftrack-n10-the-digital-breakdown%2FALPtKXz4f7jpgvk&$ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A63313449&$android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A63313449&~channel=Partner%20Catalog%20Search%20API',
                    beatport: 'https://www.beatport.com/pt/release/track_n10-the-digital-breakdown/6461603',
                    bandcamp: 'https://track-n10.bandcamp.com/album/track-n10-full-digital-breakdown',
                    netease: 'http://music.163.com/album/366533953/?userid=13850510204',
                    deezer: 'https://www.deezer.com/album/940958341',
                    audiomack: 'https://audiomack.com/track-n10/album/track-n10-the-digital-breakdown',
                    boomplay: 'https://www.boomplay.com/albums/127827981?from=artists&srModel=COPYLINK&srList=WEB&share_content=album&share_channel=copylink&share_platform=web',
                    anghami: '',
                    flo: 'https://m.music-flo.com/detail/album/452258384',
                    joox: '',
                    qobuz: 'https://open.qobuz.com/album/x7bojt8j1n2er'
                }
            },
            'track-n10-album': {
                title: 'TRACK_N1âˆ…',
                type: 'Electronic Mixtape',
                cover: 'https://live.staticflickr.com/65535/54890855699_bcdb97f7e0_c.jpg',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/1JYPV5P1itlTWOEFdf45m0?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/2xyYHD1PJ6oSYJXxLMHfIu',
                    apple: 'https://music.apple.com/us/album/track-n1%E2%88%85/1808270310',
                    tidal: 'https://listen.tidal.com/album/469752502',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nL1q2vOZY8jHqXjHqXjHqXjHqXjHqXjHq',
                    soundcloud: 'https://soundcloud.com/trackn10/sets/track_n10-album',
                    amazon: 'https://music.amazon.com/albums/B0F3M22S4P',
                    pandora: 'https://www.pandora.com/AL:55455813',
                    beatport: 'https://www.beatport.com/pt/release/TRACK_N1%E2%88%85/5542017?utm_source=android&utm_medium=share&utm_content=release',
                    bandcamp: 'https://trackn10.bandcamp.com/album/track-n1',
                    netease: 'https://y.music.163.com/m/album?id=289986911',
                    deezer: 'https://www.deezer.com/album/741839231',
                    audiomack: 'https://audiomack.com/track_n10/album/track_n1',
                    boomplay: 'https://www.boomplay.com/albums/118668198',
                    anghami: 'https://play.anghami.com/album/1076896209',
                    flo: 'https://www.music-flo.com/detail/album/445080425/albumtrack',
                    joox: 'https://www.joox.com/hk/album/zJHPja5ccay+FLQeHWlgPw==',
                    qobuz: 'https://open.qobuz.com/album/he6s8mg9x9npc'
                }
            },
            'neon-dreams': {
                title: 'NEON DREAMS',
                type: 'Album',
                cover: 'neon-dreams-album.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/00fMaoV7LrEPVVMTh8snYE?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/5cj6hXpDXkqqIDbsLT7Z6X',
                    apple: 'https://music.apple.com/us/album/neon-dreams/1787130709',
                    tidal: 'https://listen.tidal.com/album/451880816',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kN1N1N1N1N1N1N1N1N1N1N1N1N1N1N1N1',
                    soundcloud: 'https://soundcloud.com/trackn10/sets/neon-dreams',
                    amazon: 'https://music.amazon.com/albums/B0DT7WQXJ3',
                    pandora: 'https://www.pandora.com/AL:51660127',
                    beatport: 'https://www.beatport.com/pt/release/neon-dreams/5509540',
                    bandcamp: 'https://trackn10.bandcamp.com/album/neon-dreams',
                    netease: 'http://music.163.com/album/280353469/?userid=13850510204',
                    deezer: 'https://www.deezer.com/album/676713671',
                    audiomack: 'https://audiomack.com/track_n10/album/neon-dreams',
                    boomplay: 'https://www.boomplay.com/albums/124566017?from=artists',
                    anghami: 'https://play.anghami.com/album/1072579932',
                    flo: 'https://www.music-flo.com/detail/album/441545781/albumtrack',
                    joox: 'https://www.joox.com/hk/album/hYTFCr39nLkCu2JZijx6AQ==',
                    qobuz: 'https://open.qobuz.com/album/etiqzvebc3voc'
                }
            },
            'lost-hopes-dreams': {
                title: 'LOST HOPES & DREAMS (Side A)',
                type: 'Album',
                cover: 'LOST-HOPES-_-DREAMS-_Side-A_-cover.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/3MwE8NkRp237RG2iTuYuKD?utm_source=generator&theme=0',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/1YZ4E7S9D3Fq3q3q3q3q3q',
                    apple: 'https://music.apple.com/us/album/lost-hopes-dreams-side-a/1787130763',
                    tidal: 'https://listen.tidal.com/album/441481367',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mM2M2M2M2M2M2M2M2M2M2M2M2M2M2M2M2',
                    soundcloud: 'https://soundcloud.com/trackn10/sets/lost-hopes-dreams-side-a',
                    amazon: 'https://music.amazon.com/albums/B0DT7WZ1R7',
                    pandora: 'https://www.pandora.com/AL:49407777',
                    beatport: 'https://www.beatport.com/release/lost-hopes-dreams-side-a/5860109',
                    bandcamp: 'https://trackn10.bandcamp.com/album/lost-hopes-dreams-side-a',
                    netease: 'http://music.163.com/album/274873614/?userid=13850510204',
                    deezer: 'https://www.deezer.com/album/676713751',
                    audiomack: 'https://audiomack.com/track_n10/album/lost-hopes-dreams-side-a',
                    boomplay: 'https://www.boomplay.com/albums/112013354',
                    anghami: 'https://play.anghami.com/album/1070092957',   
                    flo: 'https://www.music-flo.com/detail/album/439307246/albumtrack',
                    joox: 'https://www.joox.com/hk/album/8lBqod9PBZZwAt6ODQ8FHg==',
                    qobuz: 'https://open.qobuz.com/album/cre29toicuw7b'
                }
            },
            'please-im-a-star': {
                title: "PLEASE, I'M A STAR! vol.1",
                type: 'Album',
                cover: 'PLSim astar COVER.webp',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/6WEoMhVy04gyQGKIusL6km?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/2XYZ4E7S9D3Fq3q3q3q3q3',
                    apple: 'https://music.apple.com/us/album/please-im-a-star-vol-1/1787130801',
                    tidal: 'https://tidal.com/browse/album/401685114',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nN3N3N3N3N3N3N3N3N3N3N3N3N3N3N3N3',
                    soundcloud: 'https://soundcloud.com/trackn10/sets/please-im-a-star-vol-1',
                    amazon: 'https://music.amazon.com/albums/B0DT7X5KP5',
                    pandora: 'https://www.pandora.com/AL:48729235',
                    beatport: 'https://www.beatport.com/pt/release/please-im-a-star-vol1/5509630',
                    bandcamp: 'https://trackn10.bandcamp.com/album/please-im-a-star-vol-1',
                    netease: 'https://y.music.163.com/m/album?id=273012769&userid=13850510204',
                    deezer: 'https://www.deezer.com/album/676713831',
                    audiomack: 'https://audiomack.com/track_n10/album/please-im-a-star-vol-1',
                    boomplay: 'https://www.boomplay.com/albums/111172050',
                    anghami: 'https://play.anghami.com/album/1069249735',
                    flo: 'https://www.music-flo.com/detail/album/438575177/albumtrack',
                    joox: 'https://www.joox.com/hk/album/loS5171E+slpTfCMnqCoGA==',
                    qobuz: 'https://open.qobuz.com/album/u3je85qxq5jqc'
                }
            },
            'discon10-rmx': {
                title: 'DISCON10 RMX',
                type: 'Electronic Mixtape',
                cover: 'https://live.staticflickr.com/65535/54777349858_d94da383ee_c.jpg',
                spotifyEmbed: {
                    src: 'https://open.spotify.com/embed/album/6C5fKm6y6cVtRRleMk4iVC?utm_source=generator',
                    height: 152
                },
                links: {
                    spotify: 'https://open.spotify.com/album/3XYZ4E7S9D3Fq3q3q3q3q3',
                    apple: 'https://music.apple.com/us/album/discon10-rmx/1795674212',
                    tidal: 'https://listen.tidal.com/album/433235310',
                    youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_oO4O4O4O4O4O4O4O4O4O4O4O4O4O4O4O4',
                    soundcloud: 'https://soundcloud.com/trackn10/sets/discon10-rmx',
                    amazon: 'https://music.amazon.com/albums/B0DWJQZ5G9',
                    pandora: 'https://y.music.163.com/m/album?id=270681477&userid=13850510204',
                    beatport: 'https://www.beatport.com/release/discon10-rmx/5835023',
                    bandcamp: 'https://trackn10.bandcamp.com/album/discon10-rmx',
                    netease: 'https://y.music.163.com/m/album?id=270681477&userid=13850510204',
                    deezer: 'https://www.deezer.com/album/693871721',
                    audiomack: 'https://audiomack.com/track_n10/album/discon10-rmx',
                    boomplay: 'https://www.boomplay.com/albums/110082316',
                    anghami: 'https://play.anghami.com/album/1068160927',
                    flo: 'https://www.music-flo.com/detail/album/437541403/albumtrack',
                    joox: 'https://www.joox.com/hk/album/ABmbUdGpR3OCnwmdfFvahw==',
                    qobuz: 'https://open.qobuz.com/album/jrhxnnacmf6xb'
                }
            }
        };

        // Platform display info - Using Simple Icons CDN for consistent, high-quality SVG icons
        const platformInfo = {
            spotify: { name: 'Spotify', icon: 'https://cdn.simpleicons.org/spotify/1DB954' },
            apple: { name: 'Apple Music', icon: 'https://cdn.simpleicons.org/applemusic/FA243C' },
            tidal: { name: 'Tidal', icon: 'https://cdn.simpleicons.org/tidal/ffffff' },
            youtube: { name: 'YouTube Music', icon: 'https://cdn.simpleicons.org/youtubemusic/FF0000' },
            soundcloud: { name: 'SoundCloud', icon: 'https://cdn.simpleicons.org/soundcloud/FF5500' },
            amazon: { name: 'Amazon Music', icon: 'https://m.media-amazon.com/images/I/61IBtPaYPRL.png' },
            pandora: { name: 'Pandora', icon: 'https://cdn.simpleicons.org/pandora/3668FF' },
            beatport: { name: 'Beatport', icon: 'https://logosandtypes.com/wp-content/uploads/2024/06/beatport.svg' },
            bandcamp: { name: 'Bandcamp', icon: 'https://cdn.simpleicons.org/bandcamp/629AA9' },
            netease: { name: 'NetEase Cloud Music', icon: 'https://cdn.simpleicons.org/neteasecloudmusic/C20C0C' },
            deezer: { name: 'Deezer', icon: 'https://vectorseek.com/wp-content/uploads/2023/11/Deezer-Icon-Logo-Vector.svg-.png' },
            audiomack: { name: 'Audiomack', icon: 'https://cdn.simpleicons.org/audiomack/FFA200' },
            boomplay: { name: 'Boomplay', icon: 'https://vectorseek.com/wp-content/uploads/2023/11/Boomplay-Icon-Logo-Vector.svg-.png' },
            anghami: { name: 'Anghami', icon: 'https://s3-symbol-logo.tradingview.com/anghami--600.png' },
            flo: { name: 'FLO', icon: 'https://images.seeklogo.com/logo-png/61/2/music-flo-logo-png_seeklogo-614188.png' },
            joox: { name: 'JOOX', icon: 'https://www.google.com/s2/favicons?domain=joox.com&sz=64' },
            qobuz: { name: 'Qobuz', icon: 'https://www.google.com/s2/favicons?domain=qobuz.com&sz=64' }
        };

        // Book data for each book
        const bookData = {
            'ultra-qualia': {
                title: 'Ultra Qualia',
                tags: ['Sci-Fi', 'Suspense', 'LGBT+', 'Series'],
                overview: 'Rio de Janeiro, 2040. With the emergence of the Reborn, death is no longer the end-but the price of returning to life may be higher than anyone imagines.\n\nGia, a young trans woman seeking eternal rest, awakens from a deliberate overdose in a dystopian reality. Her body and mind are now haunted by fragmented memories of a policewoman she never knew. Transformed into the target of illegal experiments-both private and governmental-she discovers that her rebirth was not an accident, but a plan.\n\nAlongside unlikely allies, such as her friend Levi and policewoman Renata, Gia must navigate a society on the brink of civil war and the labyrinth of her own consciousness. In a world where technology reconstructs memories but consumes the flesh, the truth behind Gia\'s life proves more dangerous than death itself.\n\nHow far would you go to discover if your thoughts are truly your own?\n\n"ULTRA QUALIA - Book 1, Side A" is the initial chapter of an epic duology. A visceral dive into technology, philosophy, and the social complexities of a future that is already knocking at the door.\n\nGender: Hard Science Fiction / Dystopian thriller.\nThemes: Neuroscience, Gender Identity, Existentialism, and Brazilian Cyberpunk.\nSeries: Book 1 of 2.',
                cover: 'Ultra-Qualia-Libro-1-Lato-A-original_1.webp',
                availableLanguages: ['PT', 'EN', 'DE', 'ES', 'FR', 'IT'],
                links: {
                    PT: {
                        amazon: 'https://www.amazon.com.br/dp/B0F82CXDWN',
                        kobo: 'https://www.kobo.com/pt/pt/ebook/ultra-qualia-livro-1-lado-a',
                        googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia_1?id=-gwnEQAAQBAJ',
                        applebooks: 'https://books.apple.com/pt/book/ultra-qualia-livro-1-lado-a/id6748757975',
                        walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Livro-1-Lado-A-Book-1-Paperback-9786501561356/17565215592?classType=REGULAR&from=/search',
                        fnac: 'https://www.fnac.com/livre-numerique/a21858371/Leonardo-Sales-Santos-Ultra-Qualia-Livro-1-Lado-A',
                        bookshop: 'https://bookshop.org/p/books/ultra-qualia-livro-1-lado-a-leonardo-sales-santos/5a2cb8c8ef45b8f3?ean=9786501561356&next=t',
                        gandhi: '',
                        foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9786501561356',
                        hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-ultra_qualia_livro_1_lado_a-51334531-produkt-details.html',
                        everand: 'https://pt.everand.com/book/889511756/Ultra-Qualia-Livro-1-Lado-A-Ultra-Qualia-1',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9786501561356',
                        booktopia: '',
                        waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9786501561356',
                        casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-livro-1-lado-a-ebook/9798231178445/17159491',
                        hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9786501561356',
                        overdrive: 'https://www.overdrive.com/media/12113823/ultra-qualia',
                        buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076253510',
                        ebookde: 'https://www.ebook.de/de/product/51334531/leonardo_sales_santos_ultra_qualia_livro_1_lado_a.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147846331?ean=2940181798823&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
                        bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-ultra-qualia/9300000238146469/?cid=1769985208868-7413771115708&bltgh=98f16725-a7ba-4c34-a0dc-95a8fa88524e.ProductList_Middle.15.ProductTitle',
                        smashwords: 'https://www.smashwords.com/books/view/1812286',
                        vivlio: 'https://www.vivlio.fr/search?search=9798231178445',
                        fable: 'https://fable.co/book/x-9798231178445',
                        indigo: '',
                        sanmin: '',
                        dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9786501561356',
                        powells: 'https://www.powells.com/book/ultra-qualia-livro-1-lado-a-9786501561356?condition=New',
                        lafeltrinelli: '',
                        indiebookstores: 'https://www.indiebookstores.ca/book/9786501561356/',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076564610',
                        booksamillion: 'https://www.booksamillion.com/p/Ultra-Qualia/Leonardo-Sales-Santos/9786501561356'

                    },
                    EN: {
                        amazon: 'https://a.co/d/7x1mF0Q',
                        kobo: 'https://www.kobo.com/pt/en/ebook/ultra-qualia-book-1-side-a',
                        googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia?id=KmgpEQAAQBAJ',
                        applebooks: 'https://books.apple.com/pt/book/ultra-qualia-book-1-side-a/id6748470204',
                        walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Book-1-Side-A-Book-1-Paperback-9798231227600/17253220911?classType=REGULAR',
                        fnac: 'https://www.fnac.com/livre-numerique/a21839835/Leonardo-Sales-Santos-Ultra-Qualia-Book-1-Side-A#FORMAT=ebook%20(ePub)',
                        bookshop: 'https://bookshop.org/p/books/ultra-qualia-book-1-side-a-leonardo-sales-santos/d3d3a597651ad2ab?ean=9798231227600&next=t',
                        gandhi: 'https://www.gandhi.com.mx/ultra-qualia--book-1--side-a-9798231660988/p',
                        foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9798231227600',
                        hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-ultra_qualia_book_1_side_a-51292243-produkt-details.html',
                        everand: 'https://pt.everand.com/book/886763943/Ultra-Qualia-Book-1-Side-A-Ultra-Qualia-1?_gl=1*1t6a07q*_gcl_au*MTMyMDc1NTU5OS4xNzY2NDIwMDg4',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9798231227600',
                        booktopia: 'https://www.booktopia.com.au/ultra-qualia-book-1-side-a-leonardo-sales-santos/ebook/9798231660988.html',
                        waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9798231227600',
                        casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-book-1-side-a-ebook/9798231660988/17147600',
                        hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9798231227600',
                        overdrive: 'https://www.overdrive.com/media/12088625/ultra-qualia',
                        buecherde: 'https://www.buecher.de/artikel/ebook/ultra-qualia-book-1-side-a-ebook-epub/74880526/',
                        ebookde: 'https://www.ebook.de/de/product/51292243/leonardo_sales_santos_ultra_qualia_book_1_side_a.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147810062?ean=9798231227600',
                        bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-1-ultra-qualia-book-1-side-a/9300000235707091/?referrer=socialshare_pdp_www',
                        smashwords: 'https://www.smashwords.com/books/view/1807642',
                        vivlio: 'https://shop.vivlio.com/product/9798231660988_9798231660988_10020/ultra-qualia-book-1-side-a',
                        fable: 'https://fable.co/book/ultra-qualia-book-1-side-a-by-leonardo-sales-santos-9798231660988',
                        indigo: 'https://www.indigo.ca/en-ca/ultra-qualia-book-1-side-a-ultra-qualia-1/ceb04c72-a470-3b0b-ba2d-8a5eca6450cd.html',
                        sanmin: 'https://www.sanmin.com.tw/product/index/014591394',
                        dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9798231227600',
                        powells: 'https://www.powells.com/book/ultra-qualia-book-1-side-a-9798231227600?condition=New',
                        lafeltrinelli: '',
                        indiebookstores: 'https://www.indiebookstores.ca/book/9798231227600/',
                        payhip: 'https://payhip.com/b/alWy5',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076193112',
                        booksamillion: 'https://www.booksamillion.com/p/Ultra-Qualia/Leonardo-Sales-Santos/9798231227600'
                    },
                    DE: {
                        amazon: 'https://a.co/d/gLuJNXi',
                        kobo: 'https://www.kobo.com/de/de/ebook/ultra-qualia-buch-1-seite-a',
                        googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia?id=gTicEQAAQBAJ',
                        applebooks: 'https://books.apple.com/pt/book/ultra-qualia-buch-1-seite-a/id6753985022',
                        walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Buch-1-Seite-A-Book-1-Paperback-9798232103545/18169862781?classType=REGULAR&sid=49b893aa-d854-4f57-b645-8794d39e4b20',
                        fnac: 'https://www.fnac.com/livre-numerique/a22189027/Leonardo-Sales-Santos-Ultra-Qualia-Buch-1-Seite-A#FORMAT=ebook%20(ePub)',
                        bookshop: 'https://bookshop.org/p/books/ultra-qualia-buch-1-seite-a-leonardo-sales-santos/58969b62f8314065?ean=9798232103545&next=t',
                        gandhi: '',
                        foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9798232103545',
                        hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-ultra_qualia_buch_1_seite_a-51918905-produkt-details.html',
                        everand: 'https://pt.everand.com/book/932881879/Ultra-Qualia-Buch-1-Seite-A-Ultra-Qualia-1?_gl=1*16sswg8*_gcl_au*MTMyMDc1NTU5OS4xNzY2NDIwMDg4',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9798232103545',
                        booktopia: '',
                        waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9798232103545',
                        casadellibro: '',
                        hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9798232103545',
                        overdrive: 'https://www.overdrive.com/media/12437826/ultra-qualia',
                        buecherde: 'https://www.buecher.de/artikel/ebook/ultra-qualia-buch-1-seite-a-ebook-epub/75662623/',
                        ebookde: 'https://www.ebook.de/de/product/51918905/leonardo_sales_santos_ultra_qualia_buch_1_seite_a.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148527950?ean=9798232103545',    
                        bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-ultra-qualia/9300000244132368/?referrer=socialshare_pdp_www',
                        smashwords: 'https://www.smashwords.com/books/view/1878464',
                        vivlio: 'https://shop.vivlio.com/product/9798232223403_9798232223403_10020/ultra-qualia-buch-1-seite-a',
                        fable: 'https://fable.co/book/ultra-qualia-buch-1-seite-a-by-leonardo-sales-santos-9798232223403',
                        indigo: '',
                        sanmin: '',
                        dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9798232103545',
                        powells: '',
                        lafeltrinelli: 'https://www.lafeltrinelli.it/ultra-qualia-buch-1-seite-libro-inglese-leonardo-sales-santos/e/9798232103545',
                        indiebookstores: '',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077128149',
                        booksamillion: 'https://www.booksamillion.com/p/Ultra-Qualia/Leonardo-Sales-Santos/9798232103545'
                    },
                    ES: {
                        amazon: 'https://a.co/d/i3Ryn6p',
                        kobo: 'https://www.kobo.com/es/es/ebook/ultra-qualia-libro-1-lado-a?sId=3959152d-9848-4f40-8823-d7ab04753113&ssId=bwFUU9VHOKZwUDoN_tTxR',
                        googleBooks: 'https://play.google.com/store/books/details?id=ehezEQAAQBAJ',
                        applebooks: 'https://books.apple.com/us/book/ultra-qualia-libro-1-lado-a/id6751936314',
                        walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Libro-1-Lado-A-Book-1-Paperback-9798232484675/17825056171?classType=REGULAR',
                        fnac: '',
                        gandhi: 'https://www.gandhi.com.mx/ultra-qualia--libro-1--lado-a-9798232367480/p',
                        bookshop: 'https://bookshop.org/p/books/ultra-qualia-libro-1-lado-a-leonardo-sales-santos/1cc3790055530ec7?ean=9798232484675&next=t',
                        foyles: '',
                        hugendubel: '',
                        everand: 'https://es.everand.com/book/911211399/Ultra-Qualia-Libro-1-Lado-A-Ultra-Qualia-1?language_settings_changed=Espa%C3%B1ol',
                        blackwells: '',
                        booktopia: '',
                        waterstones: '',
                        casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-libro-1-lado-a-ebook/9798232367480/17440756',
                        hatchards: '',
                        overdrive: 'https://www.overdrive.com/media/12312097/ultra-qualia',
                        buecherde: '',
                        ebookde: '',
                        barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148194401?ean=2940182052528&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
                        bolcom: '',
                        smashwords: 'https://www.smashwords.com/books/view/1847136',
                        vivlio: 'https://shop.vivlio.com/product/9798232367480_9798232367480_10020/ultra-qualia-libro-1-lado-a',
                        fable: 'https://fable.co/book/x-9798232367480',
                        indigo: '',
                        sanmin: '',
                        dymocks: '',
                        powells: 'https://www.powells.com/book/ultra-qualia-libro-1-lado-a-9798232484675?condition=New',
                        lafeltrinelli: '',
                        indiebookstores: '',
                        payhip: '',
                        thalia: '',
                        booksamillion: 'https://www.booksamillion.com/p/9798232484675'
                    },
                    FR: {
                        amazon: 'https://a.co/d/4XnWTAl',
                        kobo: 'https://www.kobo.com/pt/pt/ebook/ultra-qualia-livre-1-cote-a?sId=2d80c5c2-d91f-4c16-a12a-6ddf04442b39&ssId=ns7v-BxIxTNBJh9VOJqV9&cPos=1',
                        googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia?id=tG6hEQAAQBAJ',
                        applebooks: 'https://books.apple.com/pt/book/ultra-qualia-livre-1-c%C3%B4t%C3%A9-a/id6756591023',
                        walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Livre-1-C-t-A-Book-1-Paperback/18981674677?classType=REGULAR',
                        fnac: 'https://www.fnac.com/livre-numerique/a22466531/Leonardo-Sales-Santos-Ultra-Qualia-Livre-1-Cote-A#FORMAT=ebook%20(ePub)',
                        bookshop: 'https://bookshop.org/p/books/ultra-qualia-livre-1-c-t-a-leonardo-sales-santos/7c6fa51e9c03aad6?ean=9798233878800&next=t',
                        gandhi: '',
                        foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9798233878800',
                        hugendubel: 'https://www.hugendubel.de/de/taschenbuch/leonardo_sales_santos-ultra_qualia-52344065-produkt-details.html',
                        everand: 'https://pt.everand.com/book/967103861/Ultra-Qualia-Livre-1-Cote-A-Ultra-Qualia-1?_gl=1*6lmaay*_gcl_au*MTMyMDc1NTU5OS4xNzY2NDIwMDg4',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9798233878800',
                        booktopia: 'https://www.booktopia.com.au/ultra-qualia-leonardo-sales-santos/book/9798233878800.html',
                        waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9798233878800',
                        casadellibro: '',
                        hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9798233878800',
                        overdrive: 'https://www.overdrive.com/media/12672883/ultra-qualia',
                        buecherde: 'https://www.buecher.de/artikel/buch/ultra-qualia/76240863/',
                        ebookde: 'https://www.ebook.de/de/product/52298236/leonardo_sales_santos_ultra_qualia_livre_1_cote_a.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148962305?ean=2940183577990',
                        bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-1-ultra-qualia-livre-1-cote-a/9300000252200812/?referrer=socialshare_pdp_www', 
                        smashwords: 'https://www.smashwords.com/books/view/1924986',
                        vivlio: 'https://shop.vivlio.com/product/9798232013790_9798232013790_10020/ultra-qualia-livre-1-cote-a',
                        fable: 'https://fable.co/book/ultra-qualia-livre-1-cote-a-by-leonardo-sales-santos-9798232013790',
                        indigo: 'https://www.indigo.ca/en-ca/ultra-qualia-livre-1-cote-a-ultra-qualia-1/6f7bd18f-70c4-3389-9887-e9e3c6dabf35.html',
                        sanmin: '',
                        dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9798233878800',
                        powells: '',
                        lafeltrinelli: '',
                        indiebookstores: 'https://www.indiebookstores.ca/book/9798233878800/',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077727712',
                        booksamillion: ''

                    }
                }
            },
            'intrusive-thoughts': {
                title: 'Intrusive Thoughts',
                tags: ['Drama', 'Psychological Horror', 'Short Book', 'LGBT+'],
                overview: 'What if you couldn\'t distinguish your internal demons from reality?\n\nCharlie, a 21-year-old autistic artist, lives crushed between his mother Kimberly\'s expectations and a secret relationship with Frederic, the only one who seems to understand him. But when the intrusive thoughts that have always haunted him begin to take physical form, Charlie can no longer distinguish what is real. Charlie is on the verge of collapse-but no one sees it.\n\nIn the midst of the silent chaos of his routine, between unheard screams and solitary dances in his room, he tries to maintain some form of control while everything around him falls apart. The relationship with his mother is a minefield of judgments and suffocating silences. His boyfriend, who was once his only point of light, now seems too distant.\n\nTrapped between the desire to be accepted and the unbearable weight of being different, Charlie sinks into intrusive thoughts, distorted memories, and broken realities. The line between what is internal and what is external becomes blurred, and he no longer knows if he is trying to escape, fight, or simply survive.\n\nThis tale is a raw and intimate immersion into the mind of a neurodivergent young man grappling with the emotional wreckage of rejection, loneliness, and identity. A narrative as fragmented as his own consciousness, where nothing is certain, and everything-even love-can be a trigger.',
                cover: 'https://live.staticflickr.com/65535/54716871453_d21415ba00_b.jpg',
                availableLanguages: ['PT', 'EN', 'DE', 'FR', 'IT', 'JA'],
                links: {
                    PT: {
                        amazon: 'https://www.amazon.com.br/dp/B0F7YH14FS',
                        kobo: 'https://www.kobo.com/pt/pt/ebook/pensamentos-intrusivos',
                        googleBooks: 'https://play.google.com/store/books/details?id=lxhaEQAAQBAJ',
                        applebooks: 'https://books.apple.com/us/book/pensamentos-intrusivos/id6751006054',
                        walmart: 'https://www.walmart.com/ip/Pensamentos-Intrusivos-Paperback-9786501626796/17529224216?classType=REGULAR&sid=7666a072-5c9a-48a3-a6ca-1023c700976d',
                        fnac: 'https://www.fnac.com/livre-numerique/a21939695/Leonardo-Sales-Santos-Pensamentos-Intrusivos#FORMAT=ebook%20(ePub)',
                        bookshop: 'https://bookshop.org/p/books/pensamentos-intrusivos-leonardo-sales-santos/4bda9055dbc5c285?ean=9786501626796&next=t',
                        gandhi: '',
                        foyles: 'https://www.foyles.co.uk/book/pensamentos-intrusivos/leonardo-sales-santos/9786501626796',
                        hugendubel: 'https://www.hugendubel.de/de/buch_kartoniert/leonardo_sales_santos-pensamentos_intrusivos-51580190-produkt-details.html',
                        everand: 'https://pt.everand.com/book/893317235/Pensamentos-Intrusivos',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/Pensamentos-Intrusivos-by-Leonardo-Sales-Santos/9786501626796',
                        booktopia: '',
                        waterstones: 'https://www.waterstones.com/book/pensamentos-intrusivos/leonardo-sales-santos/9786501626796',
                        casadellibro: 'https://www.casadellibro.com/ebook-pensamentos-intrusivos-ebook/9798231264360/17216056',
                        hatchards: 'https://www.hatchards.co.uk/book/pensamentos-intrusivos/leonardo-sales-santos/9786501626796',
                        overdrive: 'https://www.overdrive.com/media/12217681/pensamentos-intrusivos',
                        buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076539543',
                        ebookde: 'https://www.ebook.de/de/product/51546366/leonardo_sales_santos_pensamentos_intrusivos.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/pensamentos-intrusivos-leonardo-sales-santos/1148042794?ean=2940182610810',
                        bolcom: 'https://www.bol.com/be/nl/p/pensamentos-intrusivos/9300000238214557/?cid=1769904518651-7374496437345&bltgh=82d8ccf5-763d-4ca0-9d20-524ce96a5ae1.ProductList_Middle.1.ProductTitle',
                        smashwords: 'https://www.smashwords.com/books/view/1832396',
                        vivlio: 'https://shop.vivlio.com/product/9798231264360_9798231264360_10020/pensamentos-intrusivos',
                        fable: 'https://fable.co/book/x-9798231264360',
                        indigo: '',
                        sanmin: '',
                        dymocks: 'https://www.dymocks.com.au/pensamentos-intrusivos-by-leonardo-sales-santos-9786501626796',
                        powells: 'https://www.powells.com/book/pensamentos-intrusivos-9786501626796?condition=New',
                        lafeltrinelli: '',
                        indiebookstores: 'https://www.indiebookstores.ca/book/9786501626796/',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076539543',
                        booksamillion: 'https://www.booksamillion.com/p/Pensamentos-Intrusivos/Leonardo-Sales-Santos/9786501626796'
                    },
                    EN: {
                        amazon: 'https://a.co/d/dLcODGn',
                        kobo: 'https://www.kobo.com/pt/en/ebook/intrusive-thoughts-3',
                        googleBooks: 'https://play.google.com/store/books/details?id=fG6hEQAAQBAJ',
                        applebooks: 'https://books.apple.com/us/book/intrusive-thoughts/id6748541026',
                        walmart: 'https://www.walmart.com/ip/Intrusive-Thoughts-Paperback-9798231880010/17267963390?classType=REGULAR&sid=156308ef-9946-44a3-b4de-bb6d9a46b33e',
                        fnac: '',
                        bookshop: 'https://bookshop.org/p/books/intrusive-thoughts-leonardo-sales-santos/b939f40f59fb4d23?ean=9798231880010&next=t',
                        gandhi: 'https://www.gandhi.com.mx/intrusive-thoughts-9798231859535/p',
                        foyles: 'https://www.foyles.co.uk/book/intrusive-thoughts/leonardo-sales-santos/9798231880010',
                        hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-intrusive_thoughts-51293184-produkt-details.html',
                        everand: 'https://www.everand.com/audiobook/970635342',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/Intrusive-Thoughts-by-Leonardo-Sales-Santos/9798231880010',
                        booktopia: 'https://www.booktopia.com.au/intrusive-thoughts-leonardo-sales-santos/ebook/9798231859535.html',
                        waterstones: 'https://www.waterstones.com/book/intrusive-thoughts/leonardo-sales-santos/9798231880010',
                        casadellibro: '',
                        hatchards: 'https://www.hatchards.co.uk/book/intrusive-thoughts/leonardo-sales-santos/9798231880010',
                        overdrive: 'https://www.overdrive.com/media/12088345/intrusive-thoughts',
                        buecherde: 'https://www.buecher.de/artikel/ebook/intrusive-thoughts-ebook-epub/74882338/',
                        ebookde: 'https://www.ebook.de/de/product/51293184/leonardo_sales_santos_intrusive_thoughts.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-thoughts-leonardo-sales-santos/1147816172?ean=9798231880010',
                        bolcom: 'https://www.bol.com/be/nl/p/intrusive-thoughts/9300000236037433/?referrer=socialshare_pdp_www',
                        smashwords: 'https://www.smashwords.com/books/view/1808306',
                        vivlio: 'https://shop.vivlio.com/product/9798231859535_9798231859535_10020/intrusive-thoughts?listName=top-ventes-de-lauteur&listId=446',
                        fable: 'https://fable.co/book/intrusive-thoughts-by-leonardo-sales-santos-9798231859535',
                        indigo: 'https://www.indigo.ca/en-ca/intrusive-thoughts/637ee95c-ed5f-3f06-aa79-734b9712d7f0.html',
                        sanmin: 'https://www.sanmin.com.tw/product/index/014633209',
                        dymocks: 'https://www.dymocks.com.au/intrusive-thoughts-by-leonardo-sales-santos-9798231880010',
                        powells: 'https://www.powells.com/book/intrusive-thoughts-9798231880010?condition=New',
                        lafeltrinelli: '',
                        indiebookstores: '',
                        payhip: '',
                        thalia: '',
                        booksamillion: 'https://www.booksamillion.com/p/Intrusive-Thoughts/Leonardo-Sales-Santos/9798231880010'
                    },
                    DE: {
                        amazon: 'https://a.co/d/b7FR06A',
                        kobo: 'https://www.kobo.com/pt/de/ebook/intrusive-gedanken',
                        googleBooks: 'https://play.google.com/store/books/details?id=qzicEQAAQBAJ',
                        applebooks: 'https://books.apple.com/us/book/intrusive-gedanken/id6751550691',
                        walmart: 'https://www.walmart.com/ip/Intrusive-Gedanken-Paperback-9798232966171/17760674590?classType=REGULAR',
                        fnac: 'https://www.fnac.com/livre-numerique/a21970686/Leonardo-Sales-Santos-Intrusive-Gedanken#FORMAT=ebook%20(ePub)',
                        bookshop: 'https://bookshop.org/p/books/intrusive-gedanken-leonardo-sales-santos/677937cbd1536413?ean=9798232966171&next=t',
                        gandhi: '',
                        foyles: '',
                        hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-intrusive_gedanken-51640040-produkt-details.html',
                        everand: 'https://www.everand.com/audiobook/970634074/Intrusive-Gedanken?_gl=1*4gxpxc*_gcl_au*MTMyMDc1NTU5OS4xNzY2NDIwMDg4',
                        blackwells: '',
                        booktopia: 'https://www.booktopia.com.au/intrusive-gedanken-leonardo-sales-santos/book/9798232966171.html',
                        waterstones: 'https://www.waterstones.com/book/9798232966171',
                        casadellibro: 'https://www.casadellibro.com/ebook-intrusive-gedanken-ebook/9798231471386/17412204',
                        hatchards: '',
                        overdrive: 'https://www.overdrive.com/media/12245759/intrusive-gedanken',
                        buecherde: 'https://www.buecher.de/artikel/ebook/intrusive-gedanken-ebook-epub/75294887/',
                        ebookde: 'https://www.ebook.de/de/product/51640040/leonardo_sales_santos_intrusive_gedanken.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-gedanken-leonardo-sales-santos/1148117277?ean=2940182441070&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
                        bolcom: 'https://www.bol.com/be/nl/p/intrusive-gedanken/9300000239029306/?bltgh=90a8e0e2-e084-429c-ba87-309c6295afa6.ProductList_Middle.2.ProductTitle',
                        smashwords: 'https://www.smashwords.com/books/view/1841194',
                        vivlio: 'https://shop.vivlio.com/product/9798231471386_9798231471386_10020/intrusive-gedanken',
                        fable: 'https://fable.co/book/x-9798231471386',
                        indigo: 'https://www.indigo.ca/en-ca/intrusive-gedanken/0f3d9639-87fa-32e0-974c-24d1c5ff843c.html',
                        sanmin: '',
                        dymocks: '',
                        powells: 'https://www.powells.com/book/intrusive-gedanken-9798232966171',
                        lafeltrinelli: 'https://www.lafeltrinelli.it/intrusive-gedanken-libro-inglese-leonardo-sales-santos/e/9798232966171',
                        indiebookstores: '',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076677668',
                        booksamillion: 'https://www.booksamillion.com/p/9798232966171'

                    },
                    FR: {
                        amazon: 'https://a.co/d/5JWr21y',
                        kobo: 'https://www.kobo.com/pt/fr/ebook/pensees-instructives?sId=54e27ba8-eb9e-43fe-b8ba-4e3a819729b6&ssId=4FsisFyj0Ys88Ueq2Se5T&cPos=2',
                        googleBooks: 'https://play.google.com/store/books/details?id=am6hEQAAQBAJ',
                        applebooks: 'https://books.apple.com/us/book/pens%C3%A9es-instructives/id6755448352',
                        walmart: '',
                        fnac: 'https://www.fnac.com/livre-numerique/a22377713/Leonardo-Sales-Santos-Pensees-Instructives#FORMAT=ebook%20(ePub)',
                        bookshop: '',
                        gandhi: '',
                        foyles: '',
                        hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-pensees_intrusives-52137250-produkt-details.html',
                        everand: '',
                        blackwells: '',
                        booktopia: '',
                        waterstones: '',
                        casadellibro: '',
                        hatchards: '',
                        overdrive: 'https://www.overdrive.com/media/12576557/pensees-instructives',
                        buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1077483773',
                        ebookde: 'https://www.ebook.de/de/product/52137250/leonardo_sales_santos_pensees_intrusives.html',
                        barnesnoble: 'https://www.barnesandnoble.com/w/pensees-intrusives-leonardo-sales-santos/1149252792;jsessionid=6F04542EF6CA30151683CAB167C48F22.prodny_store01-atgap14?ean=2940183121735&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
                        bolcom: 'https://www.bol.com/be/fr/p/pensees-instructives/9300000247772269/?cid=1766417731526-6534536589955&bltgh=2260def1-8ba3-482e-862f-b66facb3ecca.ProductList_Middle.16.ProductTitle',
                        smashwords: 'https://www.smashwords.com/books/view/1905926',
                        vivlio: 'https://shop.vivlio.com/product/9798232993177_9798232993177_10020/pensees-instructives',
                        fable: 'https://fable.co/book/x-9798232993177',
                        indigo: '',
                        sanmin: '',
                        dymocks: '',
                        powells: '',
                        lafeltrinelli: '',
                        indiebookstores: '',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077483773',
                        booksamillion: ''
                    },
                    IT: {
                        amazon: 'https://amzn.eu/d/h2XIw6G',
                        kobo: 'http://click.linksynergy.com/deeplink?murl=http%3A%2F%2Fwww.kobo.com%2Fsearch%3Fquery%3D9798232532734&id=YBM6Ddr8uSs&mid=37217',
                        googleBooks: 'https://play.google.com/store/books/details?id=KD6xEQAAQBAJ&PAffiliateID=1l3vnbh',
                        applebooks: 'https://geo.itunes.apple.com/us/book/id6757889165?at=1010l9S2',
                        walmart: '',
                        fnac: 'https://www.fnac.com/livre-numerique/a22558717/Leonardo-Sales-Santos-Pensieri-Intrusivi',
                        bookshop: 'https://bookshop.org/p/books/pensieri-intrusivi-leonardo-sales-santos/0b60c5c8f19b802a?ean=9798224051427&next=t',
                        gandhi: '',
                        foyles: 'https://www.foyles.co.uk/book/pensieri-intrusivi/leonardo-sales-santos/9798224051427',
                        hugendubel: 'https://www.hugendubel.de/de/x/-52453541-produkt-details.html',
                        everand: '',
                        blackwells: 'https://blackwells.co.uk/bookshop/product/9798224051427',
                        booktopia: 'https://www.booktopia.com.au/pensieri-intrusivi-leonardo-sales-santos/book/9798224051427.html',
                        waterstones: 'https://www.waterstones.com/book/pensieri-intrusivi/leonardo-sales-santos/9798224051427',
                        casadellibro: 'http://www.casadellibro.com/ebook-pensieri-intrusivi-ebook/9798232532734/17904908',
                        hatchards: 'https://www.hatchards.co.uk/book/pensieri-intrusivi/leonardo-sales-santos/9798224051427',
                        overdrive: 'https://www.overdrive.com/media/12805932/pensieri-intrusivi',
                        buecherde: 'http://www.buecher.de/artikel/buch/pensieri-intrusivi/76359565/',
                        ebookde: 'http://www.ebook.de/de/product/52444695/leonardo_sales_santos_pensieri_intrusivi.html',
                        barnesnoble: 'https://www.tkqlhce.com/links/7968444/type/dlg/http://www.barnesandnoble.com/s/2940182676663',
                        bolcom: 'https://www.bol.com/be/fr/p/pensieri-intrusivi/9300000257785855/?referrer=socialshare_pdp_www',
                        smashwords: 'https://www.smashwords.com/books/view/1945947',
                        vivlio: 'https://www.vivlio.fr/search?search=9798232532734',
                        fable: 'https://fable.co/book/x-9798232532734',
                        indigo: 'https://www.indigo.ca/ca4e1921-deee-38b5-95c8-53cbb7d910d8.html',
                        sanmin: '',
                        dymocks: '',
                        powells: '',
                        lafeltrinelli: '',
                        indiebookstores: 'https://www.indiebookstores.ca/book/9798224051427/',
                        payhip: '',
                        thalia: 'https://www.thalia.de/shop/home/artikeldetails/EAN9798232532734',
                        booksamillion: 'https://www.booksamillion.com/p/Pensieri-Intrusivi/Leonardo-Sales-Santos/9798224051427'
	                }
	            }
	        }
	    };

        // Bookstore display info with official brand logos
        // ATUALIZE o objeto bookstoreInfo para:
	        const bookstoreInfo = {
        // Major platforms with official Simple Icons (preferidos)
        amazon: { 
            name: 'Amazon Kindle', 
            icon: 'https://cdn.pnggallery.com/wp-content/uploads/amazon-books-logo-04.png' 
        },
        kobo: { 
            name: 'Kobo', 
            icon: 'https://kobowritinglife.zendesk.com/hc/en-us/article_attachments/360091438051/RakutenKobo_Square_WhiteOnRed.png' 
        },
        googleBooks: { 
            name: 'Google Play Books', 
            icon: 'https://www.freelogovectors.net/wp-content/uploads/2020/11/google-play-books-logo.png'
        },
        applebooks: { 
            name: 'Apple Books', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/Apple_Books_Icon2019/6edb18f6434ef86f6c0b7703c7922ae2.png' 
        },
        walmart: { 
            name: 'Walmart', 
            icon: 'https://www.walmart.com/favicon.ico' 
        },

        fnac: { 
            name: 'Fnac', 
            icon: 'https://www.google.com/s2/favicons?domain=fnac.pt&sz=32' 
        },

        // International bookstores - usando favicons do Google
        bookshop: { 
            name: 'Bookshop.org', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/Bookshop/f7b650efa41273155d6aeb893deda4ae.jpg' 
        },
        gandhi: { 
            name: 'Gandhi', 
            icon: 'https://www.google.com/s2/favicons?domain=gandhi.com.mx&sz=32' 
        },
        foyles: { 
            name: 'Foyles', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/foyles/b41a059c7afecc6b30b50d99b1902b2e.png' 
        },
        hugendubel: { 
            name: 'Hugendubel', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/Hugendubel/46f18543152eb48a96f6fa599966c401.png' 
        },
        everand: { 
            name: 'Everand', 
            icon: 'https://www.google.com/s2/favicons?domain=everand.com&sz=32' 
        },
        blackwells: { 
            name: 'Blackwells', 
            icon: 'https://www.google.com/s2/favicons?domain=blackwells.co.uk&sz=32' 
        },
        booktopia: { 
            name: 'Booktopia', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/booktopia-1_XyRiu3x/e0d51cb147d9daefd5cd342cef96be1e.png' 
        },
        waterstones: { 
            name: 'Waterstones', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/waterstones-logo-square/cb7015a794c7b928df6e9d4690554515.png' 
        },
        casadellibro: { 
            name: 'Casa del Libro', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/Casa-del-Libro/d2cdb35098e0bc3d99c639a79e8e3bf9.jpg' 
        },
        hatchards: { 
            name: 'Hatchards', 
            icon: 'https://www.newexhibitions.com/uploads/5/a/medium/65f9a3ec547d7.jpeg' 
        },
        overdrive: { 
            name: 'OverDrive', 
            icon: 'https://www.google.com/s2/favicons?domain=overdrive.com&sz=32' 
        },
        buecherde: { 
            name: 'Buecher.de', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/buecherde_logo_600/9e8d73940333d8df70e25bab5f0d403f.jpg' 
        },
        ebookde: { 
            name: 'Ebook.de', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/eBook-de-LOGO/6092794ce6afb313df21cae897f4725b.jpg' 
        },
        barnesnoble: { 
            name: 'Barnes & Noble', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/b2r-bn-print_nw7bwed/75cc88cfda36c15c5fa3b8ebb69b6f75.png' 
        },
        bolcom: { 
            name: 'Bol.com', 
            icon: 'https://www.google.com/s2/favicons?domain=bol.com&sz=32' 
        },
        smashwords: { 
            name: 'Smashwords', 
            icon: 'smashwords-logo.jpg', 
        },
        vivlio: { 
            name: 'Vivlio', 
            icon: 'https://www.vivlio.com/favicon.ico' 
        },
        fable: { 
            name: 'Fable', 
            icon: 'https://cdn.brandfetch.io/idbUpbhdgW/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1765630958595' 
        },
        indigo: { 
            name: 'Indigo', 
            icon: 'https://www.google.com/s2/favicons?domain=indigo.ca&sz=32',
        },
        sanmin: { 
            name: 'Sanmin', 
            icon: 'https://www.sanmin.com.tw/favicon.ico' 
        },
        dymocks: { 
            name: 'Dymocks', 
            icon: 'https://www.google.com/s2/favicons?domain=dymocks.com.au&sz=32' 
        },
        powells: { 
            name: 'Powells', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/powells/d0e28b6fedf8d841b8971eaef884b12b.png' 
        },
	        lafeltrinelli: { 
            name: 'La Feltrinelli', 
            icon: 'https://s3-media0.fl.yelpcdn.com/bphoto/nXBlYVyiGMgYIixHXzuuQw/l.jpg' 
        },
        indiebookstores: { 
            name: 'Indie Bookstores', 
            icon: 'https://www.google.com/s2/favicons?domain=indiebookstores.ca&sz=32' 
        },
        payhip: { 
            name: 'Payhip', 
            icon: 'https://www.google.com/s2/favicons?domain=payhip.com&sz=32' 
        },
        thalia: { 
            name: 'Thalia', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/Thalia/95931bd87bfa8385cd3db02a495d5740.jpg' 
        },
        booksamillion: { 
            name: 'Booksamillion', 
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/BAM/3d69388500349dcaf0bedb134ba9175c.png' 
        },

        angusrobertson: {
            name: 'Angus & Robertson',
            icon: 'https://www.google.com/s2/favicons?domain=angusrobertson.com.au&sz=32'
        },
        bbfs: {
            name: 'Browns Books for Students',
            icon: 'Browns-logo.png'
        },
        hoopla: {
            name: 'Hoopla',
            icon: 'hooplaicon.png'
        },
        palacemarketplace: {
            name: 'Palace Marketplace',
            icon: 'https://www.google.com/s2/favicons?domain=thepalaceproject.org&sz=32'
        },
        scribd: {
            name: 'Scribd / Everand',
            icon: 'https://www.google.com/s2/favicons?domain=everand.com&sz=32'
        }, 
        spotifybooks: {
            name: 'Spotify Books',
            icon: 'https://books2read-prod.s3.amazonaws.com/CACHE/images/store_images/SpotifyAudiobooks/1bced316bc95468238270f33bc557a7a.png'
        }

    };
	        // Author profile URLs for "ALL" view
	        const authorProfileUrls = { 
            kobo: 'https://www.kobo.com/pt/pt/search?query=leonardo%20sales%20santos&ac=1&acp=leonardo%20sales%20santos&ac.author=leonardo%20sales%20santos&sort=Temperature&fclanguages=all&pagenumber=1&fcmedia=BookSubscription&ssid=AQEug2y6TQDTjgEz9OG4j&sid=44993a60-55d5-4afc-9e5d-b3c77825f3b7',
            amazon: 'https://www.amazon.com/stores/Leonardo-Sales-Santos/author/B0DJDQG78Z?language=pt&ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=d92e8713-382a-447d-9413-1e05437e889e',
            applebooks: 'https://books.apple.com/pt/author/leonardo-sales-santos/id1747717934',
            bookshop: 'https://bookshop.org/beta-search?keywords=Leonardo+Sales+Santos',
            googleBooks: 'https://play.google.com/store/search?q=leonardo+sales+santos&c=books&hl=pt',
            gandhi: 'https://www.gandhi.com.mx/Leonardo%20Sales?map=ft',
            foyles: 'https://www.foyles.co.uk/author/9999664/leonardo-sales-santos',
            walmart: 'https://www.walmart.com/browse/0?facet=brand:Leonardo+Sales+Santos',
            hugendubel: 'https://www.hugendubel.de/de/search/advanced?authors=leonardo%20sales%20santos',
            everand: 'https://pt.everand.com/search?query=Ultra%20Qualia&verbatim=true',
            blackwells: 'https://blackwells.co.uk/bookshop/search/author/Leonardo%20Sales%20Santos',
            booktopia: 'https://www.booktopia.com.au/search?author=Leonardo%20Sales%20Santos',
            waterstones: 'https://www.waterstones.com/author/leonardo-sales-santos/9999664',
            casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-book-1-side-a-ebook/9798231660988/17147600?query=Leonardo%20Sales%20Santos',
            hatchards: 'https://www.hatchards.co.uk/author/9999664/leonardo-sales-santos',
            overdrive: 'https://www.overdrive.com/creators/4018838/leonardo-sales-santos',
            buecherde: 'https://www.buecher.de/ni/search/quick_search/q/cXVlcnk9JTIyTGVvbmFyZG8rU2FsZXMrU2FudG9zJTIyJmZpZWxkPXBlcnNvbmVu/',
            ebookde: 'https://www.ebook.de/de/search/advanced?authors=Leonardo%20Sales%20Santos',
            barnesnoble: 'https://www.barnesandnoble.com/s/%22Leonardo%20Sales%20Santos%22?Ntk=P_key_Contributor_List&Ns=P_Sales_Rank&Ntx=mode+matchall',
            bolcom: 'https://www.bol.com/be/nl/b/leonardo-sales-santos/607873657/?bltgh=uxlUyIfT2MS3DSlTroBExA.4_9.11.ProductParty',
            smashwords: 'https://www.smashwords.com/profile/view/Leonardo_SalesSantos',
            vivlio: 'https://shop.vivlio.com/author/leonardo-sales-santos/1416417',
            fable: 'https://fable.co/author/leonardo-sales-santos',
            fnac: 'https://www.fnac.com/e890134/Leonardo-Sales-Santos',
            indigo: 'https://www.indigo.ca/en-ca/books/leonardo-sales-santos/',
            sanmin: 'https://www.sanmin.com.tw/search?au=Leonardo%20Sales%20Santos',
            dymocks: 'https://www.dymocks.com.au/catalogsearch/result/?q=Leonardo+Sales+Santos',
            powells: 'https://www.powells.com/books/search?query=Leonardo+Sales+Santos&page=1',
	        lafeltrinelli: 'https://www.lafeltrinelli.it/libri-inglese/autori/leonardo-sales-santos',
            indiebookstores: 'https://www.indiebookstores.ca/books/?term=Leonardo+Sales+Santos',
            payhip: 'https://payhip.com/leonardosalessantos',
            thalia: 'https://www.thalia.de/shop/home/mehr-von-suche/ANY/sp/suche.html?mehrVon=leonardo+sales+santos',
            booksamillion: 'https://www.booksamillion.com/search2?id=9664179902116&query=Leonardo+Sales+Santos&filters[authors]=Leonardo+Sales+Santos',
            hoopla: 'https://www.hoopladigital.com/artist/leonardo-sales-santos/27380782291',
            bbfs: 'https://www.brownsbfs.co.uk/Search?Author=Santos%2C%20Leonardo%20Sales&fq=14120',
            angusrobertson: 'https://www.angusrobertson.com.au/by/Leonardo%20Sales%20Santos?src=HeaderNav'
        };

        const ultraQualiaSideAFormatLinks = {
            ebook: {
                amazon: 'https://books2read.com/u/3RMLeD?store=amazon&format=EBOOK',
                applebooks: 'https://books2read.com/u/3RMLeD?store=apple&format=EBOOK',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147810062?ean=2940182054768',
                bolcom: 'https://books2read.com/u/3RMLeD?store=bol&format=EBOOK',
                buecherde: 'https://books2read.com/u/3RMLeD?store=buecher-de&format=EBOOK',
                casadellibro: 'https://books2read.com/u/3RMLeD?store=casadellibro&format=EBOOK',
                ebookde: 'https://books2read.com/u/3RMLeD?store=ebook-de&format=EBOOK',
                fable: 'https://books2read.com/u/3RMLeD?store=fable&format=EBOOK',
                fnac: 'https://books2read.com/u/3RMLeD?store=fnac&format=EBOOK',
                gandhi: 'https://books2read.com/u/3RMLeD?store=gandhi&format=EBOOK',
                googleBooks: 'https://books2read.com/u/3RMLeD?store=google&format=EBOOK',
                hoopla: 'https://www.hoopladigital.com/title/18673610',
                hugendubel: 'https://books2read.com/u/3RMLeD?store=hugendubel&format=EBOOK',
                indigo: 'https://books2read.com/u/3RMLeD?store=indigo&format=EBOOK',
                kobo: 'https://books2read.com/u/3RMLeD?store=kobo&format=EBOOK',
                lafeltrinelli: 'https://books2read.com/u/3RMLeD?store=lafeltrinelli&format=EBOOK',
                overdrive: 'https://books2read.com/u/3RMLeD?store=overdrive&format=EBOOK',
                palacemarketplace: 'https://books2read.com/u/3RMLeD?store=palace-marketplace&format=EBOOK',
                payhip: 'https://books2read.com/u/3RMLeD?store=payhip&format=EBOOK',
                scribd: 'https://books2read.com/u/3RMLeD?store=scribd&format=EBOOK',
                smashwords: 'https://books2read.com/u/3RMLeD?store=smashwords&format=EBOOK',
                thalia: 'https://books2read.com/u/3RMLeD?store=thalia&format=EBOOK',
                vivlio: 'https://books2read.com/u/3RMLeD?store=vivlio&format=EBOOK',

            },
            paperback: {
                amazon: 'https://books2read.com/u/3RMLeD?store=amazon-paperback&format=PAPERBACK',
                angusrobertson: 'https://www.angusrobertson.com.au/books/ultra-qualia-leonardo-sales-santos/p/9798231227600',
                booksamillion: 'https://books2read.com/u/3RMLeD?store=bam-paperback&format=PAPERBACK',
                blackwells: 'https://books2read.com/u/3RMLeD?store=blackwells-paperback&format=PAPERBACK',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147810062?ean=9798231227600',
                bookshop: 'https://books2read.com/u/3RMLeD?store=bookshopdotorg-paperback&format=PAPERBACK',
                booktopia: 'https://books2read.com/u/3RMLeD?store=booktopia-paperback&format=PAPERBACK',
                foyles: 'https://books2read.com/u/3RMLeD?store=foyles-paperback&format=PAPERBACK',
                hugendubel: 'https://books2read.com/u/3RMLeD?store=hugendubel-paperback&format=PAPERBACK',
                powells: 'https://books2read.com/u/3RMLeD?store=powells-paperback&format=PAPERBACK',
                indiebookstores: 'https://www.indiebookstores.ca/book/9798231227600/',
                thalia: 'https://books2read.com/u/3RMLeD?store=thalia-paperback&format=PAPERBACK',
                waterstones: 'https://books2read.com/u/3RMLeD?store=waterstones-paperback&format=PAPERBACK',
                walmart:'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Book-1-Side-A-Book-1-Paperback-9798231227600/17253220911?classType=REGULAR',
                dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9798231227600',
                hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9798231227600',
                bbfs: 'https://books2read.com/u/3RMLeD?store=bbfs&format=EBOOK',
                sanmin: 'https://www.sanmin.com.tw/product/index/014591394',
            },
            audiobook: {
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147810062?ean=2940201061401',
                booktopia: 'https://books2read.com/u/3RMLeD?store=booktopia-audio&format=AUDIOBOOK',
                googleBooks: 'https://books2read.com/u/3RMLeD?store=google-audio&format=AUDIOBOOK',
                kobo: 'https://books2read.com/u/3RMLeD?store=kobo-audio&format=AUDIOBOOK',
                overdrive: 'https://books2read.com/u/3RMLeD?store=overdrive-audio&format=AUDIOBOOK',
                scribd: 'https://books2read.com/u/3RMLeD?store=scribd-audio&format=AUDIOBOOK',
                spotifybooks: 'https://books2read.com/u/3RMLeD?store=spotify-audiobook&format=AUDIOBOOK'
            }
        };

        const ultraQualiaPtFormatLinks = {
            ebook: {
                amazon: 'https://a.co/d/0bKEms5e',
                applebooks: 'https://books.apple.com/pt/book/ultra-qualia-livro-1-lado-a/id6748757975',
                googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia_1?id=-gwnEQAAQBAJ',
                smashwords: 'https://www.smashwords.com/books/view/1812286',
                ebookde: 'https://www.ebook.de/de/product/51334531/leonardo_sales_santos_track_n10_ultra_qualia_livro_1_lado_a.html',
                gandhi: '',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076253510',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos_track_n10-ultra_qualia_livro_1_lado_a-51334531-produkt-details.html',
                booktopia: '',
                vivlio: 'https://shop.vivlio.com/product/9798231178445_9798231178445_10020/ultra-qualia-livro-1-lado-a',
                fable: 'https://fable.co/book/x-9798231178445',
                fnac: 'https://www.fnac.com/livre-numerique/a21858371/Leonardo-Sales-Santos-Ultra-Qualia-Livro-1-Lado-A',
                indigo: '',
                kobo: 'https://www.kobo.com/pt/pt/ebook/ultra-qualia-livro-1-lado-a',
                overdrive: 'https://www.overdrive.com/media/12113823/ultra-qualia',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147846331?ean=2940181798823&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia/9300000250912554/?cid=1770989139340-2337050219019&bltgh=ee3327a0-f75a-4138-b397-b3f22c0314dd.ProductList_Middle.7.ProductTitle',
                hoopla: '',
                casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-livro-1-lado-a-ebook/9798231178445/17159491',
                lafeltrinelli: '',
                bookshop: 'https://bookshop.org/p/books/ultra-qualia-livro-1-lado-a-leonardo-sales-santos/5a2cb8c8ef45b8f3?ean=9798231178445&digital=t',
                payhip: 'https://payhip.com/b/KfBOm',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076253510',
                angusrobertson: '',
                everand: 'https://pt.everand.com/book/889511756/Ultra-Qualia-Livro-1-Lado-A-Ultra-Qualia-1'
            },
            paperback: {
                amazon: 'https://a.co/d/00cjZUD9',
                ebookde: 'https://www.ebook.de/de/product/51564154/leonardo_sales_santos_ultra_qualia.html',
                walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Livro-1-Lado-A-Book-1-Paperback-9786501561356/17565215592?classType=REGULAR',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076564610',
                hugendubel: 'https://www.hugendubel.de/de/buch_kartoniert/leonardo_sales_santos-ultra_qualia-51564154-produkt-details.html',
                booksamillion: 'https://www.booksamillion.com/p/Ultra-Qualia/Leonardo-Sales-Santos/9786501561356',
                foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9786501561356',
                blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9786501561356',
                powells: 'https://www.powells.com/book/ultra-qualia-livro-1-lado-a-9786501561356?condition=New',
                dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9786501561356',
                sanmin: '',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147846331?ean=9786501561356',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-ultra-qualia/9300000238146469/?cid=1769985208868-7413771115708&bltgh=98f16725-a7ba-4c34-a0dc-95a8fa88524e.ProductList_Middle.15.ProductTitle',
                waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9786501561356',
                hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9786501561356',
                fnac: '',
                indiebookstores: 'https://www.indiebookstores.ca/book/9786501561356/',
                bookshop: 'https://bookshop.org/p/books/ultra-qualia-livro-1-lado-a-leonardo-sales-santos/5a2cb8c8ef45b8f3?ean=9786501561356&next=t',
                bbfs: 'https://www.brownsbfs.co.uk/Product/Santos-Leonardo-Sales/Ultra-Qualia/9786501561356',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076564610',
                angusrobertson: 'https://www.angusrobertson.com.au/books/ultra-qualia-leonardo-sales-santos/p/9786501561356',
                lafeltrinelli: 'https://www.lafeltrinelli.it/ultra-qualia-livro-1-lado-libro-inglese-leonardo-sales-santos/e/9786501561356'
            },
            audiobook: {
                everand: 'https://pt.everand.com/audiobook/961922570/Ultra-Qualia-Livro-1-Lado-A',
                booktopia: '',
                kobo: 'https://www.kobo.com/pt/pt/audiobook/ultra-qualia-1?sId=549f8f4e-8305-4a02-b9ec-ae48045da63b&ssId=KXebVnFmNyRRU7rMEizqa&cPos=1',
                overdrive: 'https://www.overdrive.com/media/12646739/ultra-qualia',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1147846331?ean=2940201150969',
                googleBooks: 'https://play.google.com/store/audiobooks/details?id=AQAAAEByRD8EXM',
                spotifybooks: 'https://open.spotify.com/show/2ZsP4aS2r2TxvG0QRPrkbp'
            }
        };

        const ultraQualiaFrFormatLinks = {
            ebook: {
                amazon: 'https://a.co/d/0hjX6sOp',
                applebooks: 'https://books.apple.com/us/book/ultra-qualia-livre-1-c%C3%B4t%C3%A9-a/id6756591023',
                googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia?id=tG6hEQAAQBAJ',
                smashwords: 'https://www.smashwords.com/books/view/1924986',
                ebookde: 'https://www.ebook.de/de/product/52298236/leonardo_sales_santos_track_n10_ultra_qualia_livre_1_cote_a.html',
                gandhi: '',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1077727712',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos_track_n10-ultra_qualia_livre_1_cote_a-52298236-produkt-details.html',
                booktopia: 'https://www.booktopia.com.au/ultra-qualia-leonardo-sales-santos/book/9798233878800.html',
                vivlio: 'https://shop.vivlio.com/product/9798232013790_9798232013790_10020/ultra-qualia-livre-1-cote-a',
                fable: 'https://fable.co/book/ultra-qualia-livre-1-cote-a-by-leonardo-sales-santos-9798232013790',
                fnac: 'https://www.fnac.com/livre-numerique/a22466531/Leonardo-Sales-Santos-Ultra-Qualia-Livre-1-Cote-A#FORMAT=ebook%20(ePub)',
                indigo: 'https://www.indigo.ca/en-ca/ultra-qualia-livre-1-cote-a-ultra-qualia-1/6f7bd18f-70c4-3389-9887-e9e3c6dabf35.html',
                kobo: 'https://www.kobo.com/fr/fr/ebook/ultra-qualia-livre-1-cote-a?sId=f50774fa-6308-4690-9dd8-3c20a7113d7d&ssId=7ZENoBImC_MXAHeVw3A3r&cPos=1',
                overdrive: 'https://www.overdrive.com/media/12672883/ultra-qualia',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148962305?ean=2940183577990',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-1-ultra-qualia-livre-1-cote-a/9300000252200812/?cid=1770994983886-3971712546689&bltgh=3a5bcbb6-bbce-4a6a-9bd1-9703fc4a8436.ProductList_Middle.6.ProductTitle',
                hoopla: 'https://www.hoopladigital.com/ebook/ultra-qualia-livre-1-cote-a-leonardo-sales-santos/19365121',
                casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-livre-1-cote-a-ebook/9798232013790/17833242',
                lafeltrinelli: '',
                bookshop: 'https://bookshop.org/p/books/ultra-qualia-livre-1-c-t-a-leonardo-sales-santos/7c6fa51e9c03aad6?ean=9798232013790&digital=t',
                payhip: '',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077727712',
                angusrobertson: '',
                everand: 'https://fr.everand.com/book/967103861/Ultra-Qualia-Livre-1-Cote-A-Ultra-Qualia-1?language_settings_changed=Fran%C3%A7ais'
            },
            paperback: {
                amazon: 'https://a.co/d/09G2KhOb',
                ebookde: 'https://www.ebook.de/de/product/52344065/leonardo_sales_santos_ultra_qualia.html',
                walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Livre-1-C-t-A-Book-1-Paperback/18981674677?classType=REGULAR',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1077805256',
                hugendubel: 'https://www.hugendubel.de/de/taschenbuch/leonardo_sales_santos-ultra_qualia-52344065-produkt-details.html',
                booksamillion: '',
                foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9798233878800',
                blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9798233878800',
                powells: '',
                dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9798233878800',
                sanmin: '',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1149024079?ean=9798233878800',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-ultra-qualia/9300000254431996/?cid=1770994972230-8669854228422&bltgh=3a5bcbb6-bbce-4a6a-9bd1-9703fc4a8436.ProductList_Middle.4.ProductTitle',
                waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9798233878800',
                hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9798233878800',
                fnac: '',
                indiebookstores: 'https://www.indiebookstores.ca/book/9798233878800/',
                bookshop: 'https://bookshop.org/p/books/ultra-qualia-livre-1-c-t-a-leonardo-sales-santos/7c6fa51e9c03aad6?ean=9798233878800&next=t',
                bbfs: '',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077805256',
                angusrobertson: '',
                lafeltrinelli: ''
            },
            audiobook: {
                everand: 'https://fr.everand.com/audiobook/973575071/Ultra-Qualia-Livre-1-Cote-A',
                booktopia: '',
                kobo: 'https://www.kobo.com/fr/fr/audiobook/ultra-qualia-3?sId=167dc65a-1d55-4ac7-8a88-6cd7347b4603&ssId=9nevnuK7kFRahXFl_UnWn&cPos=3',
                overdrive: 'https://www.overdrive.com/media/12707514/ultra-qualia',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148962305?ean=2940195137236',
                googleBooks: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDqw3qDgM',
                spotifybooks: 'https://open.spotify.com/show/3fkMazKjiHwvE94IrZnpMR'
            }
        };

        const ultraQualiaDeFormatLinks = {
            ebook: {
                amazon: 'https://a.co/d/04JEppxz',
                applebooks: 'https://books.apple.com/pt/book/ultra-qualia-buch-1-seite-a/id6753985022',
                googleBooks: 'https://play.google.com/store/books/details/Leonardo_Sales_Santos_Ultra_Qualia?id=gTicEQAAQBAJ',
                smashwords: 'https://www.smashwords.com/books/view/1878464',
                ebookde: 'https://www.ebook.de/de/product/51918905/leonardo_sales_santos_track_n10_ultra_qualia_buch_1_seite_a.html',
                gandhi: '',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1077128149',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos_track_n10-ultra_qualia_buch_1_seite_a-51918905-produkt-details.html',
                booktopia: '',
                vivlio: 'https://shop.vivlio.com/product/9798232223403_9798232223403_10020/ultra-qualia-buch-1-seite-a',
                fable: 'https://fable.co/book/ultra-qualia-buch-1-seite-a-by-leonardo-sales-santos-9798232223403',
                fnac: 'https://www.fnac.com/livre-numerique/a22189027/Leonardo-Sales-Santos-Ultra-Qualia-Buch-1-Seite-A#FORMAT=ebook%20(ePub)',
                indigo: '',
                kobo: 'https://www.kobo.com/de/de/ebook/ultra-qualia-buch-1-seite-a',
                overdrive: 'https://www.overdrive.com/media/12437826/ultra-qualia',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148527950?ean=2940181251816',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-1-ultra-qualia-buch-1-seite-a/9300000243727899/?cid=1771525993267-8510644228394&bltgh=a74dd25a-0f32-406e-8de7-c4fe18a4980b.ProductList_Middle.11.ProductTitle',
                hoopla: '',
                casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-buch-1-seite-a-ebook/9798232223403/17536536',
                lafeltrinelli: '',
                bookshop: 'https://bookshop.org/p/books/ultra-qualia-buch-1-seite-a-leonardo-sales-santos/58969b62f8314065?ean=9798232223403&digital=t',
                payhip: '',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077128149',
                angusrobertson: '',
                everand: 'https://de.everand.com/book/932881879/Ultra-Qualia-Buch-1-Seite-A-Ultra-Qualia-1?_gl=1%2A16sswg8%2A_gcl_au%2AMTMyMDc1NTU5OS4xNzY2NDIwMDg4&language_settings_changed=Deutsch'
            },
            paperback: {
                amazon: 'https://a.co/d/0jjeNiKR',
                ebookde: '',
                walmart: 'https://www.walmart.com/ip/Ultra-Qualia-Ultra-Qualia-Buch-1-Seite-A-Book-1-Paperback-9798232103545/18169862781?classType=REGULAR&sid=1ef4cf3f-fb4e-4141-bd7c-446123242464',
                buecherde: '',
                hugendubel: '',
                booksamillion: 'https://www.booksamillion.com/p/Ultra-Qualia/Leonardo-Sales-Santos/9798232103545',
                foyles: 'https://www.foyles.co.uk/book/ultra-qualia/leonardo-sales-santos/9798232103545',
                blackwells: 'https://blackwells.co.uk/bookshop/product/Ultra-Qualia-by-Leonardo-Sales-Santos/9798232103545',
                powells: '',
                dymocks: 'https://www.dymocks.com.au/ultra-qualia-by-leonardo-sales-santos-9798232103545',
                sanmin: '',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1148527950?ean=9798232103545',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-ultra-qualia/9300000244132368/?referrer=socialshare_pdp_www',
                waterstones: 'https://www.waterstones.com/book/ultra-qualia/leonardo-sales-santos/9798232103545',
                hatchards: 'https://www.hatchards.co.uk/book/ultra-qualia/leonardo-sales-santos/9798232103545',
                fnac: '',
                indiebookstores: 'https://www.indiebookstores.ca/book/9798232103545/',
                bookshop: 'https://bookshop.org/p/books/ultra-qualia-buch-1-seite-a-leonardo-sales-santos/58969b62f8314065?ean=9798232103545&next=t',
                bbfs: 'https://www.brownsbfs.co.uk/Product/Santos-Leonardo-Sales/Ultra-Qualia/9798232103545',
                thalia: '',
                angusrobertson: '',
                lafeltrinelli: 'https://www.lafeltrinelli.it/ultra-qualia-buch-1-seite-libro-inglese-leonardo-sales-santos/e/9798232103545'
            },
            audiobook: {
                everand: '',
                booktopia: '',
                kobo: '',
                overdrive: '',
                barnesnoble: '',
                googleBooks: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDqwzqDwM',
                spotifybooks: ''
            }
        };

        const intrusiveThoughtsFormatLinks = {
            ebook: {
                amazon: 'https://a.co/d/06OX4Djf',
                applebooks: 'https://books.apple.com/us/book/intrusive-thoughts/id6748541026',
                googleBooks: 'https://play.google.com/store/books/details?id=fG6hEQAAQBAJ',
                smashwords: 'https://www.smashwords.com/books/view/1808306',
                ebookde: 'https://www.ebook.de/de/product/51293184/leonardo_sales_santos_intrusive_thoughts.html',
                gandhi: 'https://www.gandhi.com.mx/intrusive-thoughts-9798231859535/p',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076194332',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-intrusive_thoughts-51293184-produkt-details.html',
                booktopia: 'https://www.booktopia.com.au/intrusive-thoughts-leonardo-sales-santos/ebook/9798231859535.html',
                vivlio: 'https://shop.vivlio.com/product/9798231859535_9798231859535_10020/intrusive-thoughts?listName=top-ventes-de-lauteur&listId=446',
                fable: 'https://fable.co/book/intrusive-thoughts-by-leonardo-sales-santos-9798231859535',
                indigo: 'https://www.indigo.ca/en-ca/intrusive-thoughts/637ee95c-ed5f-3f06-aa79-734b9712d7f0.html',
                kobo: 'https://www.kobo.com/pt/en/ebook/intrusive-thoughts-3',
                overdrive: 'https://www.overdrive.com/media/12088345/intrusive-thoughts',
                barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-thoughts-leonardo-sales-santos/1147816172?ean=2940181552258',
                bolcom: 'https://www.bol.com/be/nl/p/intrusive-thoughts/9300000235977803/?bltgh=7f519eec-f4cc-44b9-bb8b-1bdd124c6756.BuyBlock_distinctive-feature.0.FeatureListItem',
                hoopla: 'https://www.hoopladigital.com/ebook/intrusive-thoughts-leonardo-sales-santos/18678018'
            },
            paperback: {
                amazon: 'https://a.co/d/0dCPcaJe',
                ebookde: 'https://www.ebook.de/de/product/51299527/leonardo_sales_santos_intrusive_thoughts.html',
                walmart: 'https://www.walmart.com/ip/Intrusive-Thoughts-Paperback-9798231880010/17267963390?classType=REGULAR&sid=156308ef-9946-44a3-b4de-bb6d9a46b33e',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076200239',
                booksamillion: 'https://www.booksamillion.com/p/Intrusive-Thoughts/Leonardo-Sales-Santos/9798231880010',
                foyles: 'https://www.foyles.co.uk/book/intrusive-thoughts/leonardo-sales-santos/9798231880010',
                hugendubel: 'https://www.hugendubel.de/de/buch_kartoniert/leonardo_sales_santos-intrusive_thoughts-51299527-produkt-details.html',
                blackwells: 'https://blackwells.co.uk/bookshop/product/Intrusive-Thoughts-by-Leonardo-Sales-Santos/9798231880010',
                powells: 'https://www.powells.com/book/intrusive-thoughts-9798231880010?condition=New',
                dymocks: 'https://www.dymocks.com.au/intrusive-thoughts-by-leonardo-sales-santos-9798231880010',
                sanmin: 'https://www.sanmin.com.tw/product/index/014633209',
                barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-thoughts-leonardo-sales-santos/1147816172?ean=9798231880010',
                bolcom: 'https://www.bol.com/be/nl/p/intrusive-thoughts/9300000236037433/?referrer=socialshare_pdp_www',
                waterstones: 'https://www.waterstones.com/book/intrusive-thoughts/leonardo-sales-santos/9798231880010',
                hatchards: 'https://www.hatchards.co.uk/book/intrusive-thoughts/leonardo-sales-santos/9798231880010'
            },
            audiobook: {
                scribd: 'https://pt.everand.com/audiobook/970635342/Intrusive-Thoughts',
                booktopia: 'https://www.booktopia.com.au/intrusive-thoughts-leonardo-sales-santos/audiobook/9798260839232.html',
                kobo: 'https://www.kobo.com/pt/en/audiobook/intrusive-thoughts-4',
                overdrive: 'https://www.overdrive.com/media/12707557/intrusive-thoughts',
                barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-thoughts-leonardo-sales-santos/1147816172?ean=2940201284985',
                googleBooks: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDqA0ZDvM',
                spotifybooks: 'https://open.spotify.com/show/6YjyuXfksIewnv73KqKvNu'
            }
        };

        const pensamentosIntrusivosFormatLinks = {
            ebook: {
                amazon: 'https://a.co/d/0d1tHkw9',
                applebooks: 'https://books.apple.com/pt/book/pensamentos-intrusivos/id6751006054',
                googleBooks: 'https://play.google.com/store/books/details?id=lxhaEQAAQBAJ',
                smashwords: 'https://www.smashwords.com/books/view/1832396',
                ebookde: 'https://www.ebook.de/de/product/51546366/leonardo_sales_santos_pensamentos_intrusivos.html',
                gandhi: '',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076539543',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-pensamentos_intrusivos-51546366-produkt-details.html',
                booktopia: '',
                vivlio: 'https://shop.vivlio.com/product/9798231264360_9798231264360_10020/pensamentos-intrusivos',
                fable: 'https://fable.co/book/x-9798231264360',
                fnac: 'https://www.fnac.com/livre-numerique/a21939695/Leonardo-Sales-Santos-Pensamentos-Intrusivos#FORMAT=ebook%20(ePub)',
                indigo: '',
                kobo: 'https://www.kobo.com/pt/pt/ebook/pensamentos-intrusivos-1',
                overdrive: 'https://www.overdrive.com/media/12217681/pensamentos-intrusivos',
                barnesnoble: 'https://www.barnesandnoble.com/w/pensamentos-intrusivos-leonardo-sales-santos/1148042794?ean=2940182610810',
                bolcom: 'https://www.bol.com/be/nl/p/pensamentos-intrusivos/9300000238090115/?cid=1770761169233-2855087658833&bltgh=a78d1c96-266e-40d5-b4b2-d6a76ab3b78e.ProductList_Middle.0.ProductTitle',
                hoopla: '',
                casadellibro: 'https://www.casadellibro.com/ebook-pensamentos-intrusivos-ebook/9798231264360/17216056',
                lafeltrinelli: '',
                bookshop: '',
                payhip: '',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076539543',
                angusrobertson: '',
                everand: 'https://pt.everand.com/book/893317235/Pensamentos-Intrusivos'
            },
            paperback: {
                amazon: 'https://a.co/d/0aTPQwRI',
                ebookde: 'https://www.ebook.de/de/product/51580190/leonardo_sales_santos_pensamentos_intrusivos.html',
                walmart: 'https://www.walmart.com/ip/Pensamentos-Intrusivos-Paperback-9786501626796/17529224216?classType=REGULAR&sid=7666a072-5c9a-48a3-a6ca-1023c700976d',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1076589213',
                booksamillion: 'https://www.booksamillion.com/p/Pensamentos-Intrusivos/Leonardo-Sales-Santos/9786501626796',
                foyles: 'https://www.foyles.co.uk/book/pensamentos-intrusivos/leonardo-sales-santos/9786501626796',
                hugendubel: 'https://www.hugendubel.de/de/buch_kartoniert/leonardo_sales_santos-pensamentos_intrusivos-51580190-produkt-details.html',
                blackwells: 'https://blackwells.co.uk/bookshop/product/Pensamentos-Intrusivos-by-Leonardo-Sales-Santos/9786501626796',
                powells: 'https://www.powells.com/book/pensamentos-intrusivos-9786501626796?condition=New',
                dymocks: 'https://www.dymocks.com.au/pensamentos-intrusivos-by-leonardo-sales-santos-9786501626796',
                sanmin: '',
                barnesnoble: 'https://www.barnesandnoble.com/w/pensamentos-intrusivos-leonardo-sales-santos/1148042794?ean=9786501626796',
                bolcom: 'https://www.bol.com/be/nl/p/pensamentos-intrusivos/9300000238214557/?cid=1769904518651-7374496437345&bltgh=82d8ccf5-763d-4ca0-9d20-524ce96a5ae1.ProductList_Middle.1.ProductTitle',
                waterstones: 'https://www.waterstones.com/book/pensamentos-intrusivos/leonardo-sales-santos/9786501626796',
                hatchards: 'https://www.hatchards.co.uk/book/pensamentos-intrusivos/leonardo-sales-santos/9786501626796',
                fnac: '',
                indiebookstores: 'https://www.indiebookstores.ca/book/9786501626796/',
                bookshop: 'https://bookshop.org/p/books/pensamentos-intrusivos-leonardo-sales-santos/4bda9055dbc5c285?ean=9786501626796&next=t',
                bbfs: 'https://www.brownsbfs.co.uk/Product/Santos-Leonardo-Sales/Pensamentos-Intrusivos/9786501626796',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1076589213',
                angusrobertson: 'https://www.angusrobertson.com.au/books/pensamentos-intrusivos-leonardo-sales-santos/p/9786501626796',
                lafeltrinelli: 'https://www.lafeltrinelli.it/pensamentos-intrusivos-libro-inglese-leonardo-sales-santos/e/9786501626796'
            },
            audiobook: {
                everand: '',
                booktopia: '',
                kobo: '',
                overdrive: '',
                barnesnoble: '',
                googleBooks: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDqgyLD2M',
                spotifybooks: ''
            }
        };

        const pensieriIntrusiviFormatLinks = {
            ebook: {
                amazon: 'https://amzn.eu/d/0a4jC0d8',
                applebooks: 'https://books.apple.com/us/book/pensieri-intrusivi/id6757889165',
                googleBooks: 'https://play.google.com/store/books/details?id=KD6xEQAAQBAJ',
                smashwords: 'https://www.smashwords.com/books/view/1945947',
                ebookde: 'https://www.ebook.de/de/product/52444695/leonardo_sales_santos_pensieri_intrusivi.html',
                gandhi: '',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1077990815',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos-pensieri_intrusivi-52444695-produkt-details.html',
                booktopia: 'https://www.booktopia.com.au/pensieri-intrusivi-leonardo-sales-santos/book/9798224051427.html',
                vivlio: 'https://shop.vivlio.com/product/9798232532734_9798232532734_10020/pensieri-intrusivi',
                fable: 'https://fable.co/book/x-9798232532734',
                fnac: 'https://www.fnac.com/livre-numerique/a22558717/Leonardo-Sales-Santos-Pensieri-Intrusivi',
                indigo: 'https://www.indigo.ca/en-ca/pensieri-intrusivi/ca4e1921-deee-38b5-95c8-53cbb7d910d8.html',
                kobo: 'https://www.kobo.com/pt/it/ebook/pensieri-intrusivi?sId=966a9e00-4add-443b-9cc7-38869afff5d8&ssId=2r-V06t_vBGO7texjyFR4',
                overdrive: 'https://www.overdrive.com/media/12805932/pensieri-intrusivi',
                barnesnoble: 'https://www.barnesandnoble.com/w/pensieri-intrusivi-leonardo-sales-santos/1149218074;jsessionid=31127E7227EF610E7B4D362C70049CFF.prodny_store01-atgap09?ean=2940182676663&st=AFF&2sid=Draft2Digital_7968444_NA&sourceId=AFFDraft2Digital',
                bolcom: 'https://www.bol.com/be/fr/p/pensieri-intrusivi/9300000257785855/?referrer=socialshare_pdp_www',
                hoopla: '',
                casadellibro: 'https://www.casadellibro.com/ebook-pensieri-intrusivi-ebook/9798232532734/17904908',
                lafeltrinelli: '',
                bookshop: 'https://bookshop.org/p/books/pensieri-intrusivi-leonardo-sales-santos/0b60c5c8f19b802a?ean=9798232532734&next=t&digital=t',
                payhip: '',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1077990815',
                angusrobertson: '',
                everand: ''
            },
            paperback: {
                amazon: 'https://amzn.eu/d/08mSqfjm',
                ebookde: 'https://www.ebook.de/de/product/52453541/leonardo_sales_santos_pensieri_intrusivi.html',
                walmart: 'https://www.walmart.com/ip/Pensieri-Intrusivi-Paperback-9798224051427/19279774318?classType=REGULAR',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1078002262',
                hugendubel: 'https://www.hugendubel.de/de/taschenbuch/leonardo_sales_santos-pensieri_intrusivi-52453541-produkt-details.html',
                booksamillion: 'https://www.booksamillion.com/p/Pensieri-Intrusivi/Leonardo-Sales-Santos/9798224051427',
                foyles: 'https://www.foyles.co.uk/book/pensieri-intrusivi/leonardo-sales-santos/9798224051427',
                blackwells: 'https://blackwells.co.uk/bookshop/product/9798224051427',
                powells: '',
                dymocks: '',
                sanmin: '',
                barnesnoble: 'https://www.barnesandnoble.com/w/pensieri-intrusivi-leonardo-sales-santos/1149218074?ean=9798224051427',
                bolcom: '',
                waterstones: 'https://www.waterstones.com/book/pensieri-intrusivi/leonardo-sales-santos/9798224051427',
                hatchards: 'https://www.hatchards.co.uk/book/pensieri-intrusivi/leonardo-sales-santos/9798224051427',
                fnac: '',
                indiebookstores: 'https://www.indiebookstores.ca/book/9798224051427/',
                bookshop: 'https://bookshop.org/p/books/pensieri-intrusivi-leonardo-sales-santos/0b60c5c8f19b802a?ean=9798224051427&next=t',
                bbfs: '',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1078002262',
                angusrobertson: '',
                lafeltrinelli: ''
            },
            audiobook: {
                bolcom: 'https://www.bol.com/be/fr/p/pensieri-intrusivi/9300000260206638/?cid=1771527733233-7947422396198&bltgh=6428e75a-9762-43e9-ade8-2bb2e292810c.ProductList_Middle.3-0.RollupItem',
                everand: 'https://www.everand.com/audiobook/989379080/Pensieri-Intrusivi',
                booktopia: '',
                kobo: 'https://www.kobo.com/pt/it/audiobook/pensieri-intrusivi-1',
                overdrive: 'https://www.overdrive.com/media/12847590/pensieri-intrusivi',
                barnesnoble: 'https://www.barnesandnoble.com/w/pensieri-intrusivi-leonardo-sales-santos/1149218074?ean=2940201865672',
                googleBooks: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAacncyfM',
                spotifybooks: ''
            }
        };

        const intrusiveThoughtsJapaneseFormatLinks = {
            ebook: {
                applebooks: 'https://books.apple.com/us/book/%E4%BE%B5%E5%85%A5%E6%80%9D%E8%80%83/id6760997820',
                kobo: 'https://www.kobo.com/pt/ja/ebook/2JoLWZj_GDSmgIE0mQhh6Q?sId=f3a7f525-414d-40fd-a2ce-f977ddf93165&ssId=nMAzcUqoFhbZPxHXZz6gS',
                smashwords: 'https://www.smashwords.com/books/view/1995159',
                vivlio: 'https://shop.vivlio.com/product/9798233039621_9798233039621_10020/qin-ru-si-kao',
                fable: 'https://fable.co/book/x-9798233039621',
                overdrive: 'https://www.overdrive.com/media/13011021/%E4%BE%B5%E5%85%A5%E6%80%9D%E8%80%83',
                payhip: 'https://payhip.com/b/bqDrV',
                amazon: '',
                googleBooks: '',
                ebookde: '',
                gandhi: '',
                buecherde: '',
                hugendubel: '',
                booktopia: '',
                fnac: '',
                indigo: '',
                barnesnoble: '',
                bolcom: '',
                hoopla: '',
                casadellibro: '',
                lafeltrinelli: '',
                bookshop: '',
                thalia: '',
                angusrobertson: '',
                everand: ''
            },
            paperback: {
                amazon: '',
                ebookde: '',
                walmart: '',
                buecherde: '',
                hugendubel: '',
                booksamillion: '',
                foyles: '',
                blackwells: '',
                powells: '',
                dymocks: '',
                sanmin: '',
                barnesnoble: '',
                bolcom: '',
                waterstones: '',
                hatchards: '',
                fnac: '',
                indiebookstores: '',
                bookshop: '',
                bbfs: '',
                thalia: '',
                angusrobertson: '',
                lafeltrinelli: ''
            },
            audiobook: {
                everand: '',
                booktopia: '',
                kobo: '',
                overdrive: '',
                barnesnoble: '',
                googleBooks: '',
                spotifybooks: ''
            }
        };

        const intrusiveGedankenFormatLinks = {
            ebook: {
                amazon: 'https://books2read.com/u/3RO1Rp?store=amazon&format=EBOOK',
                applebooks: 'https://books2read.com/u/3RO1Rp?store=apple&format=EBOOK',
                barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-gedanken-leonardo-sales-santos/1148117277?ean=2940182441070',
                bolcom: 'https://books2read.com/u/3RO1Rp?store=bol&format=EBOOK',
                buecherde: 'https://books2read.com/u/3RO1Rp?store=buecher-de&format=EBOOK',
                casadellibro: 'https://books2read.com/u/3RO1Rp?store=casadellibro&format=EBOOK',
                ebookde: 'https://books2read.com/u/3RO1Rp?store=ebook-de&format=EBOOK',
                fable: 'https://books2read.com/u/3RO1Rp?store=fable&format=EBOOK',
                fnac: 'https://books2read.com/u/3RO1Rp?store=fnac&format=EBOOK',
                googleBooks: 'https://books2read.com/u/3RO1Rp?store=google&format=EBOOK',
                hugendubel: 'https://books2read.com/u/3RO1Rp?store=hugendubel&format=EBOOK',
                indigo: 'https://books2read.com/u/3RO1Rp?store=indigo&format=EBOOK',
                kobo: 'https://books2read.com/u/3RO1Rp?store=kobo&format=EBOOK',
                overdrive: 'https://books2read.com/u/3RO1Rp?store=overdrive&format=EBOOK',
                palacemarketplace: 'https://books2read.com/u/3RO1Rp?store=palace-marketplace&format=EBOOK',
                smashwords: 'https://books2read.com/u/3RO1Rp?store=smashwords&format=EBOOK',
                thalia: 'https://books2read.com/u/3RO1Rp?store=thalia&format=EBOOK',
                vivlio: 'https://books2read.com/u/3RO1Rp?store=vivlio&format=EBOOK',
                bookshop: 'https://bookshop.org/p/books/intrusive-gedanken-leonardo-sales-santos/677937cbd1536413?ean=9798231471386&digital=t',
                smashwords: 'https://books2read.com/u/3RO1Rp?store=smashwords&format=EBOOK',
                thalia: 'https://books2read.com/u/3RO1Rp?store=thalia&format=EBOOK',
                vivlio: 'https://books2read.com/u/3RO1Rp?store=vivlio&format=EBOOK'

            },
            paperback: {
                amazon: 'https://books2read.com/u/3RO1Rp?store=amazon-paperback&format=PAPERBACK',
                angusrobertson: 'https://www.angusrobertson.com.au/books/intrusive-gedanken-leonardo-sales-santos/p/9798232966171',
                booksamillion: 'https://books2read.com/u/3RO1Rp?store=bam-paperback&format=PAPERBACK',
                barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-gedanken-leonardo-sales-santos/1148117277?ean=9798232966171',
                bookshop: 'https://books2read.com/u/3RO1Rp?store=bookshopdotorg-paperback&format=PAPERBACK',
                booktopia: 'https://books2read.com/u/3RO1Rp?store=booktopia-paperback&format=PAPERBACK',
                powells: 'https://books2read.com/u/3RO1Rp?store=powells-paperback&format=PAPERBACK',
                waterstones: 'https://books2read.com/u/3RO1Rp?store=waterstones-paperback&format=PAPERBACK',
                foyles: 'https://www.foyles.co.uk/book/intrusive-gedanken/leonardo-sales-santos/9798232966171',
                hatchards: 'https://www.hatchards.co.uk/book/intrusive-gedanken/leonardo-sales-santos/9798232966171',
                walmart: 'https://www.walmart.com/ip/Intrusive-Gedanken-Paperback-9798232966171/17760674590?classType=REGULAR',
                waterstones: 'https://books2read.com/u/3RO1Rp?store=waterstones-paperback&format=PAPERBACK',
                walmart:'https://www.walmart.com/ip/Intrusive-Gedanken-Paperback-9798232966171/17760674590?classType=REGULAR&sid=a9282dc0-aca0-49f7-b1dd-0fc8213eec58'
            },
            audiobook: {
                barnesnoble: 'https://www.barnesandnoble.com/w/intrusive-gedanken-leonardo-sales-santos/1148117277?ean=2940201158705',
                googleBooks: 'https://books2read.com/u/3RO1Rp?store=google-audio&format=AUDIOBOOK',
                kobo: 'https://books2read.com/u/3RO1Rp?store=kobo-audio&format=AUDIOBOOK',
                overdrive: 'https://books2read.com/u/3RO1Rp?store=overdrive-audio&format=AUDIOBOOK',
                scribd: 'https://pt.everand.com/audiobook/970634074/Intrusive-Gedanken'
            }
        };


        const ultraQualiaItalianFormatLinks = {
            ebook: {
                amazon: '',
                angusrobertson: '',
                applebooks: 'https://books.apple.com/us/book/ultra-qualia-libro-1-lato-a/id6758781837',
                barnesnoble: 'https://www.barnesandnoble.com/w/ultra-qualia-leonardo-sales-santos/1149395747?ean=2940196474767',
                bolcom: 'https://www.bol.com/be/nl/p/ultra-qualia-1-ultra-qualia-libro-1-lato-a/9300000261420834/?cid=1770751702551-4296307641092&bltgh=3a8d2553-1f66-4542-97c1-529a2b9baa06.ProductList_Middle.21.ProductTitle',
                buecherde: 'https://www.buecher.de/shop/home/artikeldetails/A1078179560',
                casadellibro: 'https://www.casadellibro.com/ebook-ultra-qualia-libro-1-lato-a-ebook/9798233302282/17944256',
                ebookde: 'https://www.ebook.de/de/product/52546843/leonardo_sales_santos_track_n10_ultra_qualia_libro_1_lato_a.html',
                fable: 'https://fable.co/book/x-9798233302282',
                fnac: 'https://www.fnac.com/livre-numerique/a22627794/Leonardo-Sales-Santos-Ultra-Qualia-Libro-1-Lato-A#FORMAT=ebook%20(ePub)',
                googleBooks: 'https://play.google.com/store/books/details?id=vKS_EQAAQBAJ',
                hoopla: '',
                hugendubel: 'https://www.hugendubel.de/de/ebook_epub/leonardo_sales_santos_track_n10-ultra_qualia_libro_1_lato_a-52546843-produkt-details.html',
                indigo: '',
                kobo: 'https://www.kobo.com/pt/it/ebook/ultra-qualia-libro-1-lato-a?sId=da33465c-acc3-477a-9800-66dcb8ac9b1e&ssId=H7cpTSdLgQvRmIBTl91B7&cPos=1',
                lafeltrinelli: 'https://www.lafeltrinelli.it/ultra-qualia-libro-1-lato-ebook-leonardo-sales-santos-trackn10/e/9798233302282',
                overdrive: '',
                palacemarketplace: '',
                payhip: '',
                smashwords: 'https://www.smashwords.com/books/view/1961531',
                thalia: 'https://www.thalia.de/shop/home/artikeldetails/A1078179560',
                vivlio: 'https://shop.vivlio.com/product/9798233302282_9798233302282_10020/ultra-qualia-libro-1-lato-a',
                everand: 'https://pt.everand.com/book/993002551/Ultra-Qualia-Libro-1-Lato-A-Ultra-Qualia-1'
            },
            paperback: {
                amazon: 'https://a.co/d/0h04egfj',
                angusrobertson: '',
                booksamillion: '',
                blackwells: '',
                barnesnoble: '',
                bookshop: '',
                booktopia: '',
                foyles: '',
                hugendubel: '',
                powells: '',
                thalia: '',
                waterstones: '',
                indiebookstores: '',
                walmart: ''
            },
            audiobook: {
                barnesnoble: '',
                booktopia: '',
                googleBooks: '',
                kobo: '',
                overdrive: '',
                scribd: '',
                spotifybooks: ''
            }
        };


        // Language info with flags
        const languageInfo = {
            PT: { name: 'PT', flag: 'https://flagcdn.com/w40/br.png' },
            EN: { name: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
            DE: { name: 'DE', flag: 'https://flagcdn.com/w40/de.png' },
            ES: { name: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
            FR: { name: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
            IT: { name: 'IT', flag: 'https://flagcdn.com/w40/it.png' },
            JA: { name: 'JA', flag: 'https://flagcdn.com/w40/jp.png' }
        };

        // Current selected language for book modal
        let currentBookLanguage;
        let currentBookId;

        // Modal functions
        function openStreamingModal(releaseId) {
            const release = releaseData[releaseId];
            if (!release) return;

            const modal = document.getElementById('streaming-modal');
            const cover = document.getElementById('modal-cover');
            const title = document.getElementById('modal-title');
            const type = document.getElementById('modal-type');
            const grid = document.getElementById('platform-grid');
            const spotifyContainer = document.getElementById('spotify-player-container');
            const spotifyIframe = document.getElementById('spotify-player-iframe');

            if (!modal || !cover || !title || !type || !grid || !spotifyContainer || !spotifyIframe) return;

            // Set content
            cover.src = release.cover;
            cover.alt = release.title + ' Cover';
            title.textContent = release.title;
            type.textContent = release.type;

            // Handle Spotify embedded player
            const spotifyEmbed = release.spotifyEmbed;
            if (spotifyEmbed && spotifyEmbed.src) {
                spotifyIframe.src = spotifyEmbed.src;
                spotifyIframe.title = `${release.title} - Spotify Player`;
                spotifyIframe.height = spotifyEmbed.height || 152;
                spotifyContainer.classList.remove('hidden');
            } else {
                spotifyContainer.classList.add('hidden');
                spotifyIframe.src = '';
            }

            // Build platform buttons
            grid.innerHTML = '';
            const platformOrder = ['spotify', 'apple', 'tidal', 'youtube', 'soundcloud', 'amazon', 'pandora', 'beatport', 'bandcamp', 'netease', 'deezer', 'audiomack', 'boomplay', 'anghami', 'flo', 'joox', 'qobuz'];

            platformOrder.forEach(platform => {
                const url = release.links[platform];
                const info = platformInfo[platform];
                if (!info) return; // Skip unknown platforms
                const btn = document.createElement('a');
                btn.className = 'platform-btn' + (url ? '' : ' disabled');
                btn.setAttribute('data-platform', platform);
                btn.href = url || 'javascript:void(0)'; // Disable link if no URL
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
                btn.innerHTML = `
                    <img src="${info.icon}" alt="${info.name} Logo" onerror="this.src='https://cdn.simpleicons.org/music/000000'; this.onerror=null;">
                    <span>${info.name}</span>
                `;
                grid.appendChild(btn);
            });

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Focus trap setup
            modal.querySelector('.modal-close').focus();
        }

        function closeStreamingModal() {
            const modal = document.getElementById('streaming-modal');
            const spotifyIframe = document.getElementById('spotify-player-iframe');
            if (!modal) return;
            modal.classList.remove('active');
            document.body.style.overflow = '';
            // Clear Spotify iframe to stop playback when modal closes
            if (spotifyIframe) {
                spotifyIframe.src = '';
            }
        }

        // Book Modal functions
        function openBookModal(bookId) {
            const book = bookData[bookId];
            if (!book) return;

            currentBookId = bookId;
            currentBookLanguage = 'ALL'; // Default to ALL language


            const modal = document.getElementById('book-modal');
            const cover = document.getElementById('book-modal-cover');
            const title = document.getElementById('book-modal-title');
            const tagsContainer = document.getElementById('book-modal-tags');
            const overview = document.getElementById('book-modal-overview');

            if (!modal || !cover || !title || !tagsContainer || !overview) return;

            // Set content
            cover.src = book.cover;
            cover.alt = book.title + ' Cover';
            title.textContent = book.title;
            overview.innerHTML = book.overview.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

            // Build tags
            tagsContainer.innerHTML = '';
            book.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'book-tag';
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });

            // Build language selector
            buildLanguageSelector();

            // Build bookstore links for default language
            updateBookstoreLinks();

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Focus trap setup
            modal.querySelector('.modal-close').focus();
        }

        function buildLanguageSelector() {
            const langSelector = document.getElementById('language-selector');
            const book = bookData[currentBookId];
            if (!book) return;
            langSelector.innerHTML = '';

            // Add "ALL" option first
            const allPill = document.createElement('button');
            allPill.type = 'button';
	            allPill.dataset.lang = 'ALL';
            allPill.className = 'lang-pill' + (currentBookLanguage === 'ALL' ? ' active' : '');
	            allPill.onclick = () => selectLanguage('ALL');
            allPill.innerHTML = `
                <i class="fas fa-globe" style="font-size: 1rem;"></i>
                <span>ALL</span>
            `;
            langSelector.appendChild(allPill);

            // Add language-specific options
            const availableLanguages = book.availableLanguages || Object.keys(languageInfo);
            availableLanguages.forEach(lang => {
                const info = languageInfo[lang];
                const pill = document.createElement('button');
                pill.type = 'button';
	                pill.dataset.lang = lang;
                pill.className = 'lang-pill' + (lang === currentBookLanguage ? ' active' : '');
                pill.onclick = () => selectLanguage(lang);
                pill.innerHTML = `
                    <img src="${info.flag}" alt="${info.name} flag">
                    <span>${info.name}</span>
                `;
                langSelector.appendChild(pill);
            });
        }

        function selectLanguage(lang) {
            currentBookLanguage = lang;

            // Update active state on pills
	            document.querySelectorAll('.lang-pill').forEach(pill => {
	                pill.classList.toggle('active', pill.dataset.lang === lang);
	            });

            // Update bookstore links
            updateBookstoreLinks();
        }

	        function updateBookstoreLinks() {
            const book = bookData[currentBookId];
            if (!book) return;

            const grid = document.getElementById('bookstore-grid');
            const label = document.getElementById('bookstore-label');
            if (!grid || !label) return;
            grid.innerHTML = '';
            grid.classList.remove('bookstore-sections');

            const createStoreButton = (store, url, compact = false) => {
                const info = bookstoreInfo[store] || { name: store, icon: 'https://cdn.simpleicons.org/bookstack/ffffff' };
                const btn = document.createElement('a');
                btn.className = compact ? ('bookstore-icon-btn' + (url ? '' : ' disabled')) : ('bookstore-btn' + (url ? '' : ' disabled'));
                btn.href = url || '#';
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
                btn.title = info.name;
                if (!url) {
                    btn.setAttribute('aria-disabled', 'true');
                    btn.onclick = (e) => e.preventDefault();
                }
                btn.innerHTML = compact
                    ? `<img src="${info.icon}" alt="${info.name}" onerror="this.src='https://cdn.simpleicons.org/bookstack/ffffff'; this.onerror=null;">`
                    : `<img src="${info.icon}" alt="${info.name}" onerror="this.src='https://cdn.simpleicons.org/bookstack/ffffff'; this.onerror=null;"><span>${info.name}</span>`;
                return btn;
            };

            if (currentBookLanguage === 'ALL') {
                label.textContent = 'Author Profile - All Platforms';
                const allStores = Object.keys(authorProfileUrls);
                allStores.forEach(store => grid.appendChild(createStoreButton(store, authorProfileUrls[store])));
                return;
            }

            const renderFormatSections = (formatLinks) => {
                label.textContent = 'Available by format';
                grid.classList.add('bookstore-sections');

                const sections = [
                    { key: 'ebook', title: 'Available in Ebook:' },
                    { key: 'paperback', title: 'Available in Paperback:' },
                    { key: 'audiobook', title: 'Available in Audiobook:' }
                ];

                sections.forEach(section => {
                    const links = formatLinks[section.key];
                    const wrapper = document.createElement('div');
                    const heading = document.createElement('p');
                    heading.className = 'bookstore-format-title';
                    heading.textContent = section.title;
                    wrapper.appendChild(heading);

                    const formatGrid = document.createElement('div');
                    formatGrid.className = 'bookstore-format-grid';
                    Object.entries(links).forEach(([store, url]) => formatGrid.appendChild(createStoreButton(store, url, true)));
                    wrapper.appendChild(formatGrid);
                    grid.appendChild(wrapper);
                });
            };

            if (currentBookId === 'ultra-qualia' && currentBookLanguage === 'EN') {
                renderFormatSections(ultraQualiaSideAFormatLinks);
                return;
            }

            if (currentBookId === 'ultra-qualia' && currentBookLanguage === 'PT') {
                renderFormatSections(ultraQualiaPtFormatLinks);
                return;
            }

            if (currentBookId === 'ultra-qualia' && currentBookLanguage === 'FR') {
                renderFormatSections(ultraQualiaFrFormatLinks);
                return;
            }

            if (currentBookId === 'ultra-qualia' && currentBookLanguage === 'DE') {
                renderFormatSections(ultraQualiaDeFormatLinks);
                return;
            }

            if (currentBookId === 'ultra-qualia' && currentBookLanguage === 'IT') {
                renderFormatSections(ultraQualiaItalianFormatLinks);
                return;
            }

            if (currentBookId === 'intrusive-thoughts' && currentBookLanguage === 'EN') {
                renderFormatSections(intrusiveThoughtsFormatLinks);
                return;
            }

            if (currentBookId === 'intrusive-thoughts' && currentBookLanguage === 'PT') {
                renderFormatSections(pensamentosIntrusivosFormatLinks);
                return;
            }

            if (currentBookId === 'intrusive-thoughts' && currentBookLanguage === 'JA') {
                renderFormatSections(intrusiveThoughtsJapaneseFormatLinks);
                return;
            }

            if (currentBookId === 'intrusive-thoughts' && currentBookLanguage === 'IT') {
                renderFormatSections(pensieriIntrusiviFormatLinks);
                return;
            }

            if (currentBookId === 'intrusive-thoughts' && currentBookLanguage === 'DE') {
                renderFormatSections(intrusiveGedankenFormatLinks);
                return;
            }

            label.textContent = 'Available At';
            const bookstoreOrder = ['amazon', 'kobo', 'googleBooks', 'applebooks', 'walmart', 'fnac', 'gandhi', 'foyles', 'hugendubel', 'everand', 'blackwells', 'booktopia', 'waterstones', 'casadellibro', 'hatchards', 'overdrive', 'buecherde', 'ebookde', 'barnesnoble', 'bolcom', 'smashwords', 'vivlio', 'fable', 'indigo', 'sanmin', 'dymocks', 'powells', 'lafeltrinelli', 'indiebookstores', 'payhip', 'thalia', 'booksamillion'];
            const links = (book.links && book.links[currentBookLanguage]) ? book.links[currentBookLanguage] : {};
            bookstoreOrder.forEach(store => grid.appendChild(createStoreButton(store, links[store])));
        }

        function closeBookModal() {
            const modal = document.getElementById('book-modal');
            if (!modal) return;
            modal.classList.remove('active');
            document.body.style.overflow = '';
            currentBookId = null;
        }

// Event listeners for modal
document.addEventListener('DOMContentLoaded', function() {
    updateFooterYear();
    initializeActiveNavigation();

    const modal = document.getElementById('streaming-modal');
    const bookModal = document.getElementById('book-modal');

    // Close on backdrop click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeStreamingModal();
            }
        });
    }

    // Close book modal on backdrop click
    if (bookModal) {
        bookModal.addEventListener('click', function(e) {
            if (e.target === bookModal) {
                closeBookModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('active')) {
                closeStreamingModal();
            }
            if (bookModal && bookModal.classList.contains('active')) {
                closeBookModal();
            }
        }
    });

    // Add click handlers to all carousel slides
    document.querySelectorAll('[data-release-id]').forEach(slide => {
        slide.addEventListener('click', function(e) {
            if (e.target.closest('a, button')) return;
            const releaseId = this.getAttribute('data-release-id');
            openStreamingModal(releaseId);
        });
    });

    // Add click handlers to all book cards
    document.querySelectorAll('[data-book-id]').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a, button')) return;
            const bookId = this.getAttribute('data-book-id');
            openBookModal(bookId);
        });
    });
});
