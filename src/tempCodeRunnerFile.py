from IPython.display import Audio, display

# Replace with your ngrok URL
audio_url = 'blob:https://91e0-36-255-16-53.ngrok-free.app/dab6811d-59cb-49f7-b895-9bb0eaa0d660'  # Adjust the path based on your actual file location

# Play the audio from the URL
display(Audio(audio_url))
