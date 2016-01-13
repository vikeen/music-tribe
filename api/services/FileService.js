const CONTENT_TYPES = {
  IMAGE: 'image',
  AUDIO: 'audio',
  VIDEO: 'video'
};

export default {
  getContentTypeFromFileExtention: getContentTypeFromFileExtention
}

function getContentTypeFromFileExtention(fileName) {
  var ext = fileName.split('.').pop();

  switch (ext) {
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'png':
      return CONTENT_TYPES.IMAGE;
    case 'mp3':
      return CONTENT_TYPES.AUDIO;
    case 'mp4':
      return CONTENT_TYPES.VIDEO;
    default:
      throw new Error("invalid content type provided [" + ext + "]");
  }
}
