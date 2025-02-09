import { NextResponse } from "next/server";

/**
 * Mock /photos endpoint returning some hardcoded data
 */
export async function GET() {
    return NextResponse.json<Photo[]>(
      [
        {
          id: "photo_12345",
          project_id: "project_001",
          created_at: 1739118770,
          company_id: '123',
          creator_id: '456',
          processing_status: 'processed',
          creator_type: 'admin',
          creator_name: 'Nick',
          coordinates: {
            lat: 45.6,
            lon: 44.3,
          },
          description: '',
          internal: true,
          photo_url: '',
          captured_at: 1739118770,
          updated_at: 1739118770,
          hash: '900150983cd24fb0d6963f7d28e17f72',
          uris: [{
            type: 'original',
            uri: '/photos/4f417ace4c1e35557e57b9076b432299-uncropped_scaled_within_1536_1152.jpg',
            url: '/photos/4f417ace4c1e35557e57b9076b432299-uncropped_scaled_within_1536_1152.jpg',
          }]
        },
        {
            id: "photo_6789",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/4fcaba2e9e9ea5aded698fd63fe6dc0c-cc_ft_1536.jpg',
              url: '/photos/4fcaba2e9e9ea5aded698fd63fe6dc0c-cc_ft_1536.jpg',
            }]
          },{
            id: "photo_234",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/462940_6793c8074611f6.90116884_full.jpg',
              url: '/photos/462940_6793c8074611f6.90116884_full.jpg',
            }]
          },{
            id: "photo_445",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/462940_6793c808810348.22236424_full.jpg',
              url: '/photos/462940_6793c808810348.22236424_full.jpg',
            }]
          },{
            id: "photo_987",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/Asphalt-roof.jpg',
              url: '/photos/Asphalt-roof.jpg',
            }]
          },{
            id: "photo_654",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/plumbing-493595376-2.jpg',
              url: '/photos/plumbing-493595376-2.jpg',
            }]
          },{
            id: "photo_6524",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/genMid.984827_0.jpg',
              url: '/photos/genMid.984827_0.jpg',
            }]
          },{
            id: "photo_65324",
            project_id: "project_001",
            created_at: 1739118770,
            company_id: '123',
            creator_id: '456',
            processing_status: 'processed',
            creator_type: 'admin',
            creator_name: 'Nick',
            coordinates: {
              lat: 45.6,
              lon: 44.3,
            },
            description: '',
            internal: true,
            photo_url: '',
            captured_at: 1739118770,
            updated_at: 1739118770,
            hash: '900150983cd24fb0d6963f7d28e17f72',
            uris: [{
              type: 'original',
              uri: '/photos/modern house plan - carbondale__05776.original.jpg',
              url: '/photos/modern house plan - carbondale__05776.original.jpg',
            }]
          },
      ]);
  }