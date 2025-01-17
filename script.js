document.getElementById('paymentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const membertelephone = document.getElementById('membertelephone').value;
    const memberhouseno = document.getElementById('memberhouseno').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch('https://script.google.com/macros/s/AKfycbxDOSTlHSTtqxBK90C0ViPTzHB3dgUSbLSgJsE9hczFkgOHAvhaM-ggVCoc79ilTAftcg/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, memberId, date, amount }),
    });

    const result = await response.json();
    document.getElementById('statusMessage').textContent = result.message;
});
