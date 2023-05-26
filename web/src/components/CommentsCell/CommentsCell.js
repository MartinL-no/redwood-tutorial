import Comment from 'SRC/components/Comment'
export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      bodycreatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </ul>
  )
}
