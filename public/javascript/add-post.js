async function newFormHandler(event) {
    event.preventDefault()
    
    const title = document.querySelector('input[name="post-title"]').value
    const post_url = document.querySelector('input[name="post-url"]').value

    const res = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        document.location.replace('/dashboard')
    }else {
        alert(res.statusText)
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)