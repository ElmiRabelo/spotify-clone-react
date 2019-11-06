const formatData = (data, id) => {
  const playlist = data.playlists.find(playlist => playlist.id === Number(id));
  const songs = data.songs.filter(song => song.playlistId === Number(id));
  const result = { ...playlist, songs };
  return result;
};

export default formatData;
