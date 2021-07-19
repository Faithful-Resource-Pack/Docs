keepTag()

function keepTag(date) {
    let spansNodes = document.getElementsByClassName("keepTag")
    let spans = [ ...spansNodes ]

    spans.forEach((span, index) => {

        let delayedDate = new Date()
        delayedDate.setMonth(delayedDate.getMonth() - 1)

        let postDate = new Date()
        let args = span.dataset.date.split('/').map(el => parseInt(el, 10))
        postDate.setDate(args[0])
        postDate.setMonth(args[1] - 1)
        postDate.setYear(args[2])

        if (isNaN(postDate.getTime())) spans[index].remove()

        /**
         * If the post date is greater than today's date - 1 month, show the span
         */
        if (postDate.getTime() <= delayedDate.getTime()) spans[index].remove()

    });
}