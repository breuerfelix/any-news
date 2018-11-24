function getHotPosts() {
  return [
    {
      id: 'hjsdf',
      date: '1529263473110',
      title: 'google new website wow yeah',
      href: 'http://google.com',
      source: 'google.com',
      author: 'felix',
      comments: 10,
      points: 10539,
    },
    {
      id: 'sadf',
      date: '1542488273110',
      title: 'this hackernews clone is fucking awesome',
      href: 'http://www.github.com',
      author: 'silvan',
      comments: 63,
      points: 600,
    },
    {
      id: 'sjfvf',
      date: '1542362473110',
      title: 'probably the best blog ever seen',
      href: 'https://scriptworld.net',
      author: 'felix',
      comments: 1,
      points: 2300,
    },
    {
      id: 'sadf',
      date: '1542488273110',
      title: 'Yahoo is the best site ever',
      href: 'http://yahoo.com',
      author: 'lol',
      comments: 0,
      points: 400,
    },
    {
      id: 'sadf',
      date: '1542488273110',
      title: 'I dont want this title to be grey!',
      href: 'http://spiegel.com',
      author: 'testman',
      comments: 10,
      points: 600,
    },
  ];
}

function getPost(id) {
  return {
    id: 'sadf',
    date: '1542488273110',
    title: 'I dont want this title to be grey!',
    href: 'http://spiegel.com',
    author: 'testman',
    comments: 10,
    points: 600,
    commentList: [
      {
        id: 'lskdf',
        author: 'janine',
        date: '1542488273110',
        text: 'hallo this a comment',
        points: 500,
        replies: [
          {
            id: 'lskdf',
            author: 'janine',
            date: '1542488273110',
            text: 'i replied to this comment!',
            points: 500,
            replies: []
          },
          {
            id: 'lskdf',
            author: 'janine',
            date: '1542488273110',
            text: 'i also replied to it !!',
            points: 500,
            replies: [
              {
                id: 'lskdf',
                author: 'janine',
                date: '1542488273110',
                text: 'lol this is a reply to a reply :O',
                points: 500,
                replies: []
              }
            ]
          }

        ]
      },
      {
        id: 'lskdf',
        author: 'janine',
        date: '1542488273110',
        text: 'just another comment without any replies :(',
        points: 500,
        replies: []
      }
    ]
  };
}

export { getHotPosts, getPost };
