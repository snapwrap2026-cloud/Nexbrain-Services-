export const checkVideos = async () => {
  const urls = [
    'https://cdn.coverr.co/videos/coverr-server-room-4023/1080p.mp4',
    'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5232/1080p.mp4',
    'https://cdn.coverr.co/videos/coverr-futuristic-abstract-3151/1080p.mp4',
    'https://cdn.coverr.co/videos/coverr-someone-working-on-a-computer-1422/1080p.mp4',
    'https://cdn.coverr.co/videos/coverr-data-center-2940/1080p.mp4',
  ];
  for (const url of urls) {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(url, res.status);
  }
};
checkVideos();
