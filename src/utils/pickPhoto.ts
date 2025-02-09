export default function pickPhoto(uris: ImageURI[], size: ImageType) {
    return uris.find(uri => uri.type === size)
}