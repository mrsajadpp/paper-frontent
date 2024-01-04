import Image from 'next/image'
import FormYT from './form'

export const metadata = {
  title: 'YouTube Video Downloader',
  description: 'You can download youtube video with paper',
}

export default function Home() {
  return (
    <FormYT />
  )
}
