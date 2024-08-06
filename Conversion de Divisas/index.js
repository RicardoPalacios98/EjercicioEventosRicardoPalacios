const calculateUSD = () => {
    const result = document.getElementById('io_mxn').value * 0.053
    document.getElementById('io_usd').value = result
}

const calculateMXN = () => {
    const result= document.getElementById('io_usd').value * 18.94
    document.getElementById('io_mxn').value = result
}