// initAnimateOnView
// Usage: add attributes to any element:
//   data-animate-on-view
//   data-animation="your-css-class"   -> class to add when visible
//   data-delay="200ms"                -> optional animation-delay
//   data-duration="800ms"             -> optional animation-duration
//   data-once="false"                 -> if "false", animation will re-run on each enter

export default function initAnimateOnView(options = {}){
    const selector = options.selector || '[data-animate-on-view]'
    const root = options.root || null
    const rootMargin = options.rootMargin || '0px'
    const threshold = typeof options.threshold === 'number' ? options.threshold : 0.15

    const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            const el = entry.target
            if(entry.isIntersecting){
                const animClass = el.dataset.animation || el.dataset.anim || 'aov-slide-up'
                const delay = el.dataset.delay || el.dataset.animationDelay
                const duration = el.dataset.duration || el.dataset.animationDuration
                const once = el.dataset.once === undefined ? true : !(el.dataset.once === 'false' || el.dataset.once === '0')

                if(delay) el.style.animationDelay = delay
                if(duration) el.style.animationDuration = duration

                // ensure element is visible (in case user added hidden helper class)
                el.classList.remove('aov-hidden')
                el.classList.add(animClass)

                if(once){
                    io.unobserve(el)
                }
            } else {
                // if not once, allow animation to re-trigger by removing class when out of view
                const elOnce = el.dataset.once === undefined ? true : !(el.dataset.once === 'false' || el.dataset.once === '0')
                if(!elOnce){
                    const animClass = el.dataset.animation || el.dataset.anim || 'aov-slide-up'
                    el.classList.remove(animClass)
                }
            }
        })
    }, { root, rootMargin, threshold })

    // Observe matching elements, adding a hidden helper class if not already present
    const els = document.querySelectorAll(selector)
    els.forEach(el=>{
        if(!el.classList.contains('aov-hidden')) el.classList.add('aov-hidden')
        io.observe(el)
    })

    return io
}