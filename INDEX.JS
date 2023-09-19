i;
const videoData = [
  {
    videoId: "jHcs9ZxnUJA",
    title: "Amarração de faixa",
    description: "Descrição do Vídeo 1",
  },
  {
    videoId: "8emFxqG3KBo",
    title: "Maiores animais do Mundo",
    description: "Descrição do Vídeo 2",
  },
  {
    videoId: "YGTO6bmCKaw",
    title: "As praias mais perigosas do Mundo",
    description: "Descrição do Vídeo 3",
  },
  {
    videoId: "VIDEO_ID_4",
    title: "Título do Vídeo 4",
    description: "Descrição do Vídeo 4",
  },
  {
    videoId: "VIDEO_ID_5",
    title: "Título do Vídeo 5",
    description: "Descrição do Vídeo 5",
  },
];

function onYouTubeIframeAPIReady() {
  for (let i = 0; i < videoData.length; i++) {
    createYouTubePlayer(videoData[i]);
  }
}

function createYouTubePlayer(data) {
  const playerContainer = document.createElement("div");
  playerContainer.className = "video-player";
  document.getElementById("video-container").appendChild(playerContainer);

  new YT.Player(playerContainer, {
    videoId: data.videoId,
    width: 640,
    height: 360,
    playerVars: {
      autoplay: 0,
    },
  });

  const titleElement = document.createElement("h2");
  titleElement.textContent = data.title;
  playerContainer.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = data.description;
  descriptionElement.className = "video-description";
  playerContainer.appendChild(descriptionElement);
}
