'use client'
import Image from 'next/image'

export default function FormYT() {

    // Function to dynamically insert options
    function insertOptions(data) {
        const selectElement = document.getElementById('quality');
        const selectType = document.getElementById('type');

        if (selectType.value === 'mp4') {
            data.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.text = option.name;
                selectElement.appendChild(optionElement);

                if (selectElement.length === 0) {
                    selectElement.style.display = 'none'; // Hide the select
                } else {
                    selectElement.style.display = 'block'; // Show the select
                }
            });
        }
    }

    return (
        <main className='home'>
            {/* <div className='logo'>
                <img src='/paper.png'></img>
            </div>
            <form className='buttons' action='http://localhost:3001/download' method='POST'>
                <input name='url' onChange={(e) => {
                    fetch('http://localhost:3001/qualities', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ url: e.target.value })
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                            }
                            return response.json(); // assuming the response is in JSON format
                        })
                        .then(data => {
                            console.log('Success:', data);
                            // Handle the successful response data here
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            // Handle errors or failed requests here
                        });

                }} type="url" placeholder='You Tube video URL' />
                <select name="type" id="type">
                    <option value="mp4">Mp4</option>
                    <option value="mp3">Mp3</option>
                </select>
                <select name="quality" id="type">
                    <option value="1080">1080p</option>
                </select>
                <button type='submit'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#fff' }}><path d="M6 18h12v2H6zm5-14v8.586L6.707 8.293 5.293 9.707 12 16.414l6.707-6.707-1.414-1.414L13 12.586V4z"></path></svg></span>
                </button>
            </form> */}
            <div className="container">
                <form id="contact" action="http://13.51.175.214:80/api/youtube/download" method="post">
                    <fieldset>
                        <img src="/paper.png" alt="fizzy"></img>
                    </fieldset>
                    <br></br>
                    <fieldset>
                        <input placeholder="YouTube video link" type="url" tabIndex="1" name="url" onChange={(e) => {
                            fetch('http://13.51.175.214:80/qualities', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ url: e.target.value })
                            })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error(`HTTP error! Status: ${response.status}`);
                                    }
                                    return response.json(); // assuming the response is in JSON format
                                })
                                .then(data => {
                                    console.log('Success:', data);
                                    insertOptions(data);
                                    // Handle the successful response data here
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Handle errors or failed requests here
                                });

                        }} required autoFocus></input>
                    </fieldset>
                    <fieldset>
                        <select tabIndex="1" name="type" id='type' required autoFocus onChange={(e) => {
                            const selectElement = document.getElementById('quality');
                            const selectType = document.getElementById('type');
                            if (selectType.value === 'mp3') {
                                selectElement.style.display = 'none'; // Hide the select
                            } else {
                                selectElement.style.display = 'block'; // Show the select
                            }
                        }}>
                            <option value="mp4">MP4</option>
                            <option value="mp3">MP3</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <select tabIndex="1" name="quality" id='quality' style={{ display: 'none' }} required autoFocus></select>
                    </fieldset>
                    <fieldset>
                        <button style={{ backgroundColor: '#ff0047' }} title="Download" type="submit" id="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#fff' }}><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path></svg>
                        </button>
                    </fieldset>
                </form>
            </div>
        </main>
    )
}
