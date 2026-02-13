export const vertex = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
export const fragment = `
precision mediump float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uVelocity;
uniform float uActive;

uniform float uRadius;
uniform float uStrength;

uniform vec2 uResolution;
uniform vec2 uTextureSize;

vec2 getCoverUV(vec2 uv, vec2 resolution, vec2 textureSize) {

    float screenRatio = resolution.x / resolution.y;
    float textureRatio = textureSize.x / textureSize.y;

    vec2 newUV = uv;

    if(screenRatio < textureRatio){
        float scale = screenRatio / textureRatio;
        newUV.x = uv.x * scale + (1.0 - scale) * 0.5;
    } else {
        float scale = textureRatio / screenRatio;
        newUV.y = uv.y * scale + (1.0 - scale) * 0.5;
    }

    return newUV;
}

void main() {

    vec2 uv = vUv;

    float dist = distance(uv, uMouse);

    float falloff = exp(-pow(dist / uRadius, 2.0));

    float ripple =
        sin(dist * 40.0 - uVelocity * 15.0) *
        0.5 + 0.5;

    ripple *= falloff;

    vec2 direction = normalize(uv - uMouse);

    vec2 displacement =
        direction *
        ripple *
        uStrength *
        uVelocity *
        0.03 *
        uActive;

    vec2 coverUV = getCoverUV(uv - displacement, uResolution, uTextureSize);

    vec4 color = texture2D(uTexture, coverUV);

    gl_FragColor = color;
}

`