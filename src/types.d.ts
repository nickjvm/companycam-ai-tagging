type Photo = {
    id: string
    company_id: string
    creator_id: string
    creator_type: string
    creator_name: string
    project_id: string
    processing_status: 'pending'|'processing'|'processed'|'processing_error'|'duplicate'
    coordinates: {
        lat: number
        lon: number
    }
    uris: ImageURI[]
    hash: string
    description: string
    internal: boolean
    captured_at: number
    created_at: number
    updated_at: number
    photo_url: string
}

type TaggedPhoto = {
    id: string
    url: string
    tags: string[]
}
type ImageURI = {
    type: ImageType
    uri: string
    url: string
}

type ImageType = 'original'|'thumbnail'