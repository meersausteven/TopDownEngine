
const SNACKBAR_NEUTRAL = 'snackbar_neutral';
const SNACKBAR_INFO = 'snackbar_info';
const SNACKBAR_WARNING = 'snackbar_warning';
const SNACKBAR_DANGER = 'snackbar_danger';
const SNACKBAR_SUCCESS = 'snackbar_success';

class Snackbar {
        html;
        text;
        type;
        displayTime;

        constructor(text, type = SNACKBAR_NEUTRAL, displayTime = 5000) {
                // string text: text that is displayed inside the snackbar
                // int displayTime: time in miliseconds how long the snackbar will be displayed
                this.text = text;
                this.type = type;
                this.displayTime = displayTime;

                this.html = new HtmlElement('div', this.text, {class: 'snackbar ' + this.type, style: `--snackbar-animation-duration: ${this.displayTime}ms`});
                this.html.addEventListener('animationend', function() {
                        this.remove();
                });

                document.body.appendChild(this.html);
        }
}