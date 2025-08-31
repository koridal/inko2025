// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import StudioNavbar from '@/components/StudioNavbar';
import { schemaTypes } from '@/sanity/schemaTypes'; // <-- 이 부분이 index.ts를 찾아줄 거예요.

// import {postType} from './postType' // <-- 이 줄은 삭제하거나 주석 처리해주세요!
                                      // postType은 이미 schemaTypes 안에 포함되어 있으므로 여기서 직접 가져올 필요 없어요!

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; // 보통 dataset도 정의됩니다.

export default defineConfig({
  basePath: '/studio', // 스튜디오의 기본 경로 설정 (예시)
  projectId,
  dataset,
  // name: '프로젝트이름', // 프로젝트 이름 설정 (예시)
  // title: 'Sanity Studio', // 스튜디오의 제목 설정 (예시)

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes, // 이곳에서 schemaTypes 배열을 사용합니다.
  },
  // 스튜디오 커스터마이징 (선택 사항)
  studio: {
    components: {
      navbar: StudioNavbar,
    }
  },
})