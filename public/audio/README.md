# Audio Files Directory

Place your music composition files here.

## File Naming Convention

- `track-1.mp3`
- `track-2.mp3`
- `track-3.mp3`

## External Access

All files in this directory are publicly accessible via direct URLs:

```
https://yourdomain.com/audio/track-1.mp3
https://yourdomain.com/audio/track-2.mp3
```

These URLs can be used in:
- Tampermonkey scripts
- External players
- API integrations
- Any other external scripts

## Supported Formats

- MP3 (recommended)
- WAV
- OGG
- M4A

## Example Usage in External Script

```javascript
// Tampermonkey script example
const trackUrl = "https://yourdomain.com/audio/track-1.mp3";
const audio = new Audio(trackUrl);
audio.play();
```
