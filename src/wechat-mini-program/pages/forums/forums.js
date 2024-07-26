// pages/forums/forums.js
Page({
  data: {
    currentTab: 0,
    tabs: [
      { name: '推荐', posts: [] },
      { name: '关注', posts: [] },
      { name: '动态', posts: [] },
      { name: '问答', posts: [] },
      { name: '话题', posts: [] },
      { name: '附近', posts: [] }
    ],
    currentPosts: []
  },

  onLoad() {
    this.fetchPosts();
  },

  onLoad() {
    this.fetchPosts();
  },

  fetchPosts() {
    // Simulate fetching posts for each tab
    const posts = [
      {
        id: 1,
        author: '用户1',
        avatar: '/images/avatar.jpg',
        date: '2024-07-15',
        content: '推荐内容的帖子。这个帖子包含了很多有趣的信息，大家可以在这里讨论社区活动的细节和安排。',
        topic: '社区活动',
        replies: 10,
        likes: 5,
        isFollowing: false
      },
      {
        id: 2,
        author: '用户2',
        avatar: '/images/avatar.jpg',
        date: '2024-07-14',
        content: '关注内容的帖子。近期社区内发生了一些安全事件，希望大家能够提高警惕，注意自身安全。',
        topic: '安全警报',
        replies: 8,
        likes: 3,
        isFollowing: true
      },
      {
        id: 3,
        author: '用户3',
        avatar: '/images/avatar.jpg',
        date: '2024-07-13',
        content: '动态内容的帖子。分享一下我今天在社区公园遇到的一些趣事，天气真好，心情也很好。',
        topic: '日常分享',
        replies: 5,
        likes: 2,
        isFollowing: false
      },
      {
        id: 4,
        author: '用户4',
        avatar: '/images/avatar.jpg',
        date: '2024-07-12',
        content: '问答内容的帖子。我想请问一下大家，有没有推荐的家政服务公司，最近需要找人帮忙打扫卫生。',
        topic: '社区问题',
        replies: 12,
        likes: 7,
        isFollowing: false
      },
      {
        id: 5,
        author: '用户5',
        avatar: '/images/avatar.jpg',
        date: '2024-07-11',
        content: '话题内容的帖子。最近社区内的某些话题引起了热议，大家怎么看待这些问题，欢迎发表意见。',
        topic: '热门话题',
        replies: 15,
        likes: 9,
        isFollowing: true
      },
      {
        id: 6,
        author: '用户6',
        avatar: '/images/avatar.jpg',
        date: '2024-07-10',
        content: '附近内容的帖子。社区附近新开了一家咖啡馆，环境很好，推荐大家去试试。',
        topic: '附近活动',
        replies: 20,
        likes: 11,
        isFollowing: false
      }
    ];


    this.setData({
      'tabs[0].posts': posts.filter(post => post.content.includes('推荐')),
      'tabs[1].posts': posts.filter(post => post.content.includes('关注')),
      'tabs[2].posts': posts.filter(post => post.content.includes('动态')),
      'tabs[3].posts': posts.filter(post => post.content.includes('问答')),
      'tabs[4].posts': posts.filter(post => post.content.includes('话题')),
      'tabs[5].posts': posts.filter(post => post.content.includes('附近'))
    });

    // Initialize with posts from the first tab
    this.setData({
      currentPosts: this.data.tabs[0].posts
    });
  },

  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index,
      currentPosts: this.data.tabs[index].posts
    });
  },

  followAuthor(e) {
    const postId = e.currentTarget.dataset.id;
    const currentTab = this.data.currentTab;
    const posts = this.data.tabs[currentTab].posts.map(post => {
      if (post.id === postId) {
        post.isFollowing = !post.isFollowing;
      }
      return post;
    });

    this.setData({
      [`tabs[${currentTab}].posts`]: posts,
      currentPosts: posts
    });
  }
});
