export default ({ id }) => `
{
  publishedEpisode(id: ${id}) {
    id,
    image,
    duration
    title,
    description,
    publishedAt,
    content,
    podcast {
      id,
      title,
      image
    },
    enclosure {
      length,
      url,
      type
    },
    audio {
      duration
    }
  }
}
`
