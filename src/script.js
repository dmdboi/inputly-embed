let id = '';

const a = async (data) => {
  return fetch(url + id, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json()).then(json => { return json })
}

function m() {
  id = window.document.getElementById('inputly').getAttribute('form')
  if (!id) return console.log('No Form ID specified')

  // Attach CSS to head
  const l = document.createElement('link');
  l.href = 'https://inputly.io/inputly.min.css'
  l.type = 'text/css';
  l.rel = 'stylesheet';
  l.media = 'screen';
  document.getElementsByTagName('head')[0].appendChild(l);

  // Create Button Wrapper
  const bw = document.createElement('div')
  bw.id = 'i-logo'

  const fw = document.createElement('div')
  fw.id = 'i-fw'
  fw.style.display = 'none'
  bw.appendChild(fw);

  // Create f form and position above button
  const f = `<div id="i-f">
  <div style="display: none;" id="i-success">
    <p>Thank you for the feedback!</p>
  </div>
  <div style="display: none;" id="i-error">
    <p>There was an error submitting this form.</p>
  </div>
  <form id="i-form" method="POST">
    <div>
      <label id="i-label" for="email">Email Address</label>
      <div id="i-input-w">
        <input type="text" name="email" autocomplete="email" placeholder="John@doe.co.uk" id="i-email" required" />
      </div>
    </div>
    <div>
      <label id="i-label" for="message">Feedback</label>
      <div id="i-input-w">
        <textarea type="text" name="message" id="i-message" required placeholder="What's on your mind?"></textarea>
      </div>
    </div>
    <div>
      <div id="i-footer">
        <button onclick="subF();" type="button" id="i-button">
          Submit
        </button>
      </div>
      <div id="i-link">
        Powered by <a href='https://inputly.io'>Inputly</a>
      </div>
    </div>
  </form>
</div>`
  fw.innerHTML = f

  // Create Button and append to Wrapper
  const button = `<div><button onclick="tog('i-fw')" >📣</button></div>`
  bw.innerHTML += button

  document.body.appendChild(bw);
}

async function subF() {
  const e = gebi('i-email').value;
  const m = gebi('i-message').value;

  const rs = await a({ email: e, message: m })
  e.value = ''; m.value = '';

  if (rs.success) {
    tog('i-form');
    return tog('i-success');
  }

  if (!rs.success) {
    tog('i-form');
    return tog('i-error');
  }
}

function gebi(id) {
  return document.getElementById(id)
}

function tog(id) {
  let el = gebi(id)
  if (el.style.display === "") {
    return el.style.display = "none"
  }
  return el.style.display = ""
}

window.onload = () => {
  url = 'https://api.inputly.io/f/'
  m()
}
