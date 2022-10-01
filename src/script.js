let id = '';

const a = async (data) => {
  return fetch(url + id, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(res => res.json()).then(json => { return json })
}

function m() {
  id = window.document.getElementById('inputly').getAttribute('form')
  if (!id) throw Error('No Form ID specified')

  // Attach CSS to head
  const l = document.createElement('l');
  l.href = 'https://inputly.io/tailwind.min.css'
  l.type = 'text/css';
  l.rel = 'stylesheet';
  l.media = 'screen';
  document.getElementsByTagName('head')[0].appendChild(l);

  // Create Button Wrapper
  const bw = document.createElement('div')
  bw.className = 'absolute bottom-0 right-0 p-4'

  const fw = document.createElement('div')
  fw.className = 'w-full flex justify-end'
  fw.id = 'i-fw'
  fw.style.display = 'none'
  bw.appendChild(fw);

  // Create f form and position above button
  const f = `<div class="w-96 mb-4 border border-gray-200 rounded-xl px-4 py-4 shadow-xl">
  <div class="bg-green-100 text-sm text-green-700 p-4 rounded" style="display: none;" id="i-success">
    <p>Thank you for the f!</p>
  </div>
  <div class="bg-red-100 text-sm text-red-700 p-4 rounded" style="display: none;" id="i-error">
    <p>There was an error submitting this form</p>
  </div>
  <form class="space-y-4" id="i-form" method="POST"">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <input type="text" name="email" autocomplete="email" placeholder="John@doe.co.uk" id="i-email" required
          class="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
      </div>
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">Feedback</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <textarea type="text" name="message" id="i-message" required placeholder="What's on your mind?"
          class="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"></textarea>
      </div>
    </div>
    <div>
      <div class="mt-1 flex rounded-md shadow-sm">
        <button onclick="subF();" type="button"
          class="text-center text-white transition duration-200 ease-in w-full px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500">
          Submit
        </button>
      </div>
      <div class="text-sm text-gray-500 text-center mt-2">
        Powered by <a href='https://inputly.io' class='text-blue-500'>Inputly</a>
      </div>
    </div>
  </form>
</div>`
  fw.innerHTML = f

  // Create Button and append to Wrapper
  const button = `<div class="flex justify-end"><button onclick="tog('i-fw')" class="text-xl bg-blue-800 hover:bg-blue-700 transition duration-200 ease-in hover:-translate-y-1 text-white rounded-full h-12 w-12">📣</button><div>`
  bw.innerHTML += button

  document.body.appendChild(bw);
}

async function subF() {
  const e = document.gebi('i-email').value;
  const r = document.gebi('i-rating').value;
  const m = document.gebi('i-message').value;

  const rs = await api({ email: e, rating: r, message: m })
  e.value = ''; r.value = ''; m.value = '';

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
