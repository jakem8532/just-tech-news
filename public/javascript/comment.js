const commentBtn = document.querySelector('.comment-form')

async function commentFormHandler(event) {
    event.preventDefault()

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim()

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    if (comment_text) {
        const res = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            document.location.reload()
        }else {
            alert(res.statusText)
        }
    }
}

commentBtn.addEventListener('submit', commentFormHandler)


