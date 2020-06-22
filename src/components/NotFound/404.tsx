import React from 'react';
import $ from 'jquery';

class NotFoundAnimate extends React.Component {

  componentDidMount() {
      showPolygons();
      setInterval(function(){
        showPolygons();
      },2500)
    
    function showPolygons() {
      $('[class="processed"]').removeAttr('class');
      // var polyCount = $('polygon').length;
      
      $('polygon').each(function(ind, el) {
        setTimeout(function() {
           $('polygon:eq(' + ind + ')').attr('class', 'processed');
        }, Math.random() * 2000);
      });
    }
  }

  render() {
    return (
      <svg 	width="100%" height="187.5px" viewBox="0 0 620 250">
      <g>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="515.432,111.35 520.317,95.257 522.903,85.487 
          491.58,100.43 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="534.973,63.359 562.56,41.807 574.63,32.323 518.018,67.67 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="522.903,82.901 523.478,84.337 534.111,64.509 
          520.892,67.67 516.294,68.82 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="567.158,61.635 547.617,70.544 558.537,78.877 
          569.457,86.924 567.733,67.957 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="535.835,63.647 546.755,69.969 578.078,30.312 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="589.285,63.072 568.02,61.348 568.882,71.693 
          570.032,86.924 577.791,77.153 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="584.688,170.835 580.664,153.881 570.032,159.341 
          587.274,182.905 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="585.55,130.029 567.733,136.351 580.664,152.731 
          582.676,143.535 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="550.203,123.42 556.526,128.017 567.158,135.489 
          589.86,104.453 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="576.641,93.246 570.032,88.361 559.112,103.016 
          589.86,103.016 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="546.18,185.204 548.479,169.111 529.225,161.927 
          533.823,168.536 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="549.054,170.548 547.33,183.48 547.042,186.066 
          559.399,201.871 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="567.733,191.813 571.181,186.353 549.629,169.686 
          560.549,202.446 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="571.756,186.928 560.836,203.595 587.849,219.688 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="577.216,149.282 567.733,137.501 569.744,158.766 
          580.377,153.306 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="485.545,111.637 514.282,111.637 491.006,101.005 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="570.032,160.49 572.043,185.779 587.561,184.054 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="484.109,181.755 496.753,162.214 493.879,155.03 
          489.856,145.26 484.683,177.732 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="477.499,129.167 476.349,131.753 500.489,130.029 
          484.97,112.499 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="587.849,144.972 581.239,153.593 585.837,172.847 
          587.849,181.468 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="530.375,155.892 534.398,146.122 502.787,146.984 
          528.364,160.49 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="501.638,147.271 497.615,161.927 526.927,160.778 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="501.063,146.984 490.43,144.397 497.04,161.352 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="485.833,112.212 500.201,128.305 501.351,129.741 
          515.144,112.212 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="549.629,123.994 545.031,131.178 535.835,145.26 
          566.583,136.064 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="533.536,116.523 535.26,144.685 549.054,123.707 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="557.675,104.166 533.823,115.948 549.341,123.132 
          554.226,111.637 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="489.856,143.248 500.489,130.604 476.924,132.615 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="581.527,152.156 587.849,143.535 586.124,131.753 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="451.923,171.41 475.2,132.615 460.832,131.466 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="475.775,132.615 452.498,171.985 489.281,143.823 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="544.743,88.648 533.823,115.086 545.893,109.339 
          557.675,103.303 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="553.077,75.716 547.617,71.406 548.479,74.28 
          558.537,102.729 569.17,88.073 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="520.892,96.119 516.868,110.488 534.685,90.085 
          523.765,85.487 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="524.053,84.912 532.386,88.361 534.685,89.222 
          534.685,65.371 527.789,77.728 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="529.225,159.915 563.997,137.501 535.26,146.122 
          530.949,156.179 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="548.766,168.536 566.296,137.213 529.225,161.065 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="558.824,103.591 550.49,122.557 589.573,103.591 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="549.629,167.962 558.25,164.226 569.17,159.053 
          568.595,154.742 566.871,137.213 558.25,152.731 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="545.031,87.786 557.387,101.579 547.042,72.268 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="571.181,185.491 569.744,165.95 569.17,159.915 
          559.399,164.226 549.629,169.111 560.549,177.157 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="536.122,64.796 544.456,86.061 546.468,70.831 
          541.87,67.957 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="533.823,113.649 537.846,103.591 544.169,88.361 
          538.421,89.51 535.548,90.085 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="535.548,89.51 544.169,87.498 539.858,76.578 
          535.548,65.946 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="502.5,70.831 522.616,83.762 521.467,81.464 515.719,69.107 
            "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="545.893,186.353 538.996,184.054 535.548,182.905 
          533.536,219.688 541.295,198.997 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="545.318,185.491 540.145,178.019 529.225,163.364 
          535.26,182.043 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="555.376,198.135 546.755,186.928 535.548,216.527 
          533.823,221.125 559.686,203.595 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="553.077,222.562 588.136,220.838 560.549,204.17 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="534.111,221.699 552.215,222.562 559.686,204.457 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="497.902,162.502 515.719,184.629 527.789,161.639 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="456.808,186.64 483.246,183.192 488.994,145.26 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="484.109,183.192 494.741,185.491 495.029,181.755 
          496.753,163.938 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="516.294,184.916 534.398,182.043 528.364,161.927 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="495.891,179.744 495.316,185.491 514.857,184.916 
          497.327,163.076 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="588.998,219.975 591.584,205.607 573.193,188.077 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="585.837,129.167 590.435,104.74 568.02,135.489 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="572.618,186.64 574.055,188.077 591.584,204.457 
          587.849,184.629 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="588.998,184.054 610.551,184.916 598.769,173.422 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="599.344,172.847 611.126,184.629 611.988,164.801 
          603.366,170.26 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="487.27,146.409 466.579,161.927 451.348,173.709 
          452.785,178.019 455.947,186.353 478.074,157.904 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="608.539,148.133 602.217,158.191 611.988,163.364 
          609.976,145.834 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="601.93,149.857 602.217,146.122 589.285,144.397 
          601.355,157.616 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="609.689,145.26 603.079,146.122 602.217,156.754 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="601.355,158.478 588.998,145.26 598.769,171.41 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="601.642,170.548 611.413,164.226 601.93,158.766 
          599.344,171.985 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="594.458,161.927 588.424,145.834 588.424,183.48 
          598.481,172.559 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="463.131,112.212 444.451,135.489 459.969,130.891 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="578.653,28.588 553.652,29.45 518.018,66.808 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="533.249,49.853 552.79,29.45 535.548,27.438 517.156,66.52 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="534.111,28.875 520.892,41.807 516.868,65.658 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="518.593,51.29 520.03,43.243 501.926,70.256 515.432,68.245 
            "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="501.351,70.831 482.959,88.361 522.616,84.625 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="521.467,85.487 482.672,89.222 490.718,100.142 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="567.446,60.486 579.228,30.312 548.479,69.394 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="570.607,87.498 585.837,85.774 589.573,64.221 
          578.078,78.015 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="570.894,88.073 590.435,102.442 586.124,86.349 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="587.561,35.772 580.664,28.875 568.595,59.049 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="568.307,60.486 589.86,62.497 587.849,36.634 
          578.078,48.703 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="442.44,137.788 434.106,146.697 436.118,159.628 
          439.566,148.421 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="443.302,137.788 436.406,161.065 450.487,172.272 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="452.498,165.663 459.682,131.753 449.05,134.627 
          443.877,136.351 451.061,171.985 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="450.774,174.284 447.038,179.169 443.302,184.054 
          455.372,186.64 453.36,180.319 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="450.199,173.422 436.693,162.214 439.854,179.456 
          445.026,176.295 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="490.43,100.718 482.672,90.085 485.258,110.775 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="449.624,174.571 448.475,175.146 440.141,180.031 
          442.727,183.767 444.164,182.043 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="475.775,131.466 476.924,128.88 484.396,112.212 
          464.28,111.35 470.028,121.408 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="476.349,99.855 464.568,110.775 484.396,111.637 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="481.809,89.797 476.637,99.281 484.396,110.775 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="460.832,130.891 475.2,131.753 463.993,112.212 
          461.694,126.006 	"/>
      </g>
      <g>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="341.323,78.446 344.197,68.101 345.634,62.928 
          310.574,56.893 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="281.263,192.531 278.964,196.267 270.343,209.774 
          284.137,205.176 	"/>
        <path fill="none" stroke="#63C4AE" strokeMiterlimit="10" d="M317.759,72.124c0,0,0.287,0,0.287,0.287l15.518,12.644
          l-23.276-26.438L317.759,72.124z"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="341.898,78.734 368.623,99.136 346.208,63.503 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="296.206,56.031 320.92,39.652 289.309,42.238 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="289.022,41.376 318.621,39.076 282.7,34.766 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="346.783,62.928 369.486,98.849 366.612,63.216 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="297.643,56.031 308.276,55.744 320.92,40.801 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="301.379,67.814 294.769,78.159 306.264,72.124 
          307.989,57.756 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="307.414,68.388 306.839,72.124 317.184,72.124 
          308.85,57.181 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="371.209,112.068 369.773,101.148 361.439,105.459 
          353.393,109.769 375.52,143.966 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="353.106,110.632 348.795,129.023 347.358,135.058 
          375.52,145.403 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="350.232,120.402 352.243,110.344 345.346,113.218 
          347.071,133.046 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="309.138,55.744 344.772,62.066 322.357,39.939 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="225.226,154.599 245.342,145.403 232.41,134.196 
          225.226,154.311 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="262.297,183.336 257.699,172.703 245.629,145.978 
          225.226,155.461 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="223.215,115.517 232.123,132.184 234.422,121.552 
          221.49,112.356 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="278.964,171.841 246.779,146.552 251.377,157.185 
          263.159,183.91 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="295.632,56.319 288.735,42.525 273.791,77.584 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="280.976,191.67 272.355,188.221 263.734,185.06 
          269.481,209.486 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="234.709,120.977 240.169,101.723 221.49,111.206 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="278.677,91.952 292.758,79.308 273.504,79.308 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="263.159,109.769 278.102,92.527 274.654,83.906 
          272.929,79.883 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="235.284,120.977 243.618,122.414 240.744,102.585 
          237.296,113.793 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="293.333,78.734 295.632,57.468 273.791,78.734 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="235.284,84.194 240.744,99.712 257.699,64.653 
          232.698,76.147 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="241.606,99.712 264.595,84.194 272.355,79.021 
          258.848,64.365 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="274.654,71.55 273.791,75.86 288.448,41.95 281.551,35.053 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="261.722,112.068 244.767,122.701 272.929,132.471 
          268.044,123.563 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="272.642,113.505 262.871,112.068 270.918,127.299 
          273.217,131.322 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="298.218,181.612 298.505,188.221 315.747,176.726 
          297.93,175.002 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="262.871,111.206 269.481,112.356 272.642,112.93 
          277.815,93.964 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="336.151,87.355 338.737,83.331 340.748,79.021 
          310.574,58.043 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="242.756,111.781 244.193,122.126 261.435,111.493 
          241.319,101.436 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="296.493,214.947 310,210.061 310.287,209.774 
          301.666,210.923 291.896,212.36 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="270.918,132.759 258.848,128.448 243.905,123.276 
          232.985,133.046 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="298.505,189.658 294.769,200.865 291.321,211.785 
          312.586,208.624 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="370.347,100.286 379.543,104.022 383.279,105.459 
          367.474,65.227 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="387.877,104.597 395.349,102.01 368.048,64.94 
          371.784,74.998 384.141,105.746 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="272.067,79.883 241.606,100.861 262.01,110.919 
          265.458,100.573 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="297.356,176.152 286.148,202.59 297.93,188.509 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="296.493,176.439 281.838,191.67 284.712,204.026 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="336.725,87.642 351.381,107.47 341.323,79.883 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="296.493,175.289 297.068,174.715 279.826,172.416 
          280.688,181.612 281.838,190.52 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="361.439,104.884 369.486,100.573 342.473,80.17 
          348.22,96.263 353.106,109.195 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="340.173,97.987 345.346,112.356 352.243,109.482 
          337.587,89.941 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="263.734,184.198 281.263,190.807 278.964,172.99 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="274.941,143.104 273.504,133.621 246.779,145.403 
          278.964,171.266 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="271.492,133.621 232.985,133.621 245.917,145.116 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="296.493,173.853 282.412,161.208 280.688,168.393 
          279.826,171.553 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="279.252,169.542 281.838,160.346 274.654,137.644 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="234.997,121.839 232.698,132.184 243.043,122.989 
          237.008,122.126 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="294.195,77.297 307.989,56.606 296.493,56.893 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="290.172,212.647 268.619,215.808 297.93,224.142 
          297.356,223.568 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="269.768,210.636 268.619,212.647 267.757,214.947 
          281.551,206.613 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="268.906,210.348 264.595,192.531 264.308,191.094 
          265.458,200.578 267.182,214.372 268.044,212.36 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="310.862,210.348 296.781,215.521 297.356,218.395 
          298.793,223.855 311.724,209.774 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="307.989,222.418 312.299,210.636 299.942,224.142 
          301.953,223.855 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="291.608,213.222 297.068,221.843 297.93,222.992 
          296.206,215.808 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="247.641,198.566 246.204,199.716 266.607,214.947 
          262.584,185.347 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="239.594,98.562 231.836,76.722 228.387,82.757 
          236.721,94.539 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="246.491,68.963 253.388,65.802 231.836,72.124 
          232.41,75.573 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="232.698,90.228 228.1,83.906 221.203,110.632 
          240.169,100.573 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="258.274,63.216 263.446,38.215 232.698,70.974 
          246.204,66.951 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="224.939,156.036 224.939,161.783 258.561,181.324 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="221.203,113.218 224.652,153.449 231.836,133.334 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="225.513,162.932 245.917,199.141 262.297,184.485 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="374.946,193.394 392.475,165.519 355.979,171.266 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="289.884,212.073 284.424,206.038 268.619,215.234 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="378.107,147.702 393.049,164.082 398.509,138.506 
          376.957,146.265 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="391.613,113.793 377.244,145.403 393.337,139.656 
          398.797,137.644 395.923,103.735 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="355.116,171.553 340.461,189.658 371.209,198.279 
          360.576,180.462 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="305.115,223.855 300.804,224.717 314.31,226.154 
          308.276,223.28 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="331.84,211.211 315.173,209.486 336.438,220.694 
          333.564,214.659 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="311.15,216.096 309.138,222.418 336.151,221.556 
          313.448,209.486 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="316.322,226.441 334.139,222.131 309.713,223.28 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="332.701,211.211 337.587,221.556 349.945,213.51 
          339.599,212.073 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="351.094,212.647 371.209,198.854 340.173,190.52 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="338.449,193.969 332.701,210.348 350.232,212.935 
          339.599,190.807 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="357.99,174.715 372.072,197.991 374.657,194.256 
          361.439,178.738 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="392.188,164.944 347.645,136.207 355.405,170.692 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="259.135,63.503 270.343,75.86 272.355,77.871 
          264.021,38.789 261.722,49.997 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="376.095,146.552 349.945,136.782 391.038,163.22 
          376.382,146.552 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="347.933,139.943 347.071,136.495 341.611,152.3 
          354.255,168.968 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="384.141,106.321 377.244,142.53 395.636,102.872 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="370.347,101.148 376.095,143.391 383.567,106.321 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="395.349,100.286 384.428,64.94 367.761,63.216 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="314.598,192.819 316.035,177.301 304.54,185.06 
          298.793,188.796 303.39,195.118 312.874,207.762 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="297.356,190.52 284.999,205.463 290.459,211.498 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="354.255,171.266 348.795,169.542 337.587,166.094 
          338.161,171.553 339.886,189.083 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="316.897,178.163 313.448,208.624 331.552,210.348 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="339.024,190.233 317.471,177.301 331.84,210.061 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="337.012,166.094 317.759,176.726 339.312,189.37 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="350.232,164.944 341.323,153.162 337.587,165.232 
          354.255,170.404 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="281.838,33.616 300.804,24.421 281.263,29.306 
          281.551,30.743 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="280.401,29.594 266.607,36.203 280.976,33.904 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="382.417,64.078 376.382,61.491 369.198,62.641 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="322.07,38.215 319.483,24.134 305.115,23.559 
          313.448,31.031 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="280.976,34.479 272.929,35.916 264.595,37.352 
          272.929,76.722 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="321.207,38.789 303.965,23.559 282.7,33.904 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="343.909,60.054 320.345,25.57 322.931,39.076 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="366.036,62.353 355.979,50.284 341.035,32.467 
          346.495,62.353 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="357.416,37.065 341.611,31.605 365.749,61.204 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="367.187,62.353 376.095,60.917 358.566,38.502 
          360.865,45.112 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="340.173,31.318 320.633,24.708 345.059,60.629 	"/>
      </g>
      <g>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="89.338,111.35 94.223,95.257 96.809,85.487 65.487,100.43 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="108.879,63.359 136.467,41.807 148.536,32.323 91.924,67.67 
            "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="96.809,82.901 97.385,84.337 108.017,64.509 94.798,67.67 
          90.2,68.82 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="141.064,61.635 121.523,70.544 132.443,78.877 
          143.364,86.924 141.639,67.957 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="109.741,63.647 120.661,69.969 151.984,30.312 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="163.192,63.072 141.927,61.348 142.788,71.693 
          143.938,86.924 151.697,77.153 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="158.594,170.835 154.571,153.881 143.938,159.341 
          161.18,182.905 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="159.456,130.029 141.639,136.351 154.571,152.731 
          156.582,143.535 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="124.11,123.42 130.432,128.017 141.064,135.489 
          163.766,104.453 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="150.548,93.246 143.938,88.361 133.018,103.016 
          163.766,103.016 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="120.087,185.204 122.385,169.111 103.132,161.927 
          107.73,168.536 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="122.96,170.548 121.236,183.48 120.948,186.066 
          133.305,201.871 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="141.639,191.813 145.088,186.353 123.535,169.686 
          134.455,202.446 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="145.662,186.928 134.742,203.595 161.755,219.688 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="151.122,149.282 141.639,137.501 143.651,158.766 
          154.283,153.306 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="59.451,111.637 88.189,111.637 64.912,101.005 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="143.938,160.49 145.949,185.779 161.468,184.054 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="58.015,181.755 70.659,162.214 67.785,155.03 63.762,145.26 
          58.59,177.732 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="51.406,129.167 50.256,131.753 74.395,130.029 
          58.877,112.499 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="161.755,144.972 155.145,153.593 159.743,172.847 
          161.755,181.468 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="104.281,155.892 108.304,146.122 76.694,146.984 
          102.27,160.49 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="75.544,147.271 71.521,161.927 100.833,160.778 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="74.969,146.984 64.337,144.397 70.947,161.352 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="59.739,112.212 74.107,128.305 75.257,129.741 
          89.051,112.212 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="123.535,123.994 118.937,131.178 109.741,145.26 
          140.49,136.064 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="107.442,116.523 109.166,144.685 122.96,123.707 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="131.581,104.166 107.73,115.948 123.247,123.132 
          128.133,111.637 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="63.762,143.248 74.395,130.604 50.83,132.615 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="155.433,152.156 161.755,143.535 160.031,131.753 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="25.829,171.41 49.106,132.615 34.738,131.466 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="49.681,132.615 26.404,171.985 63.187,143.823 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="118.65,88.648 107.73,115.086 119.799,109.339 
          131.581,103.303 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="126.983,75.716 121.523,71.406 122.385,74.28 
          132.443,102.729 143.076,88.073 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="94.798,96.119 90.775,110.488 108.592,90.085 97.672,85.487 
            "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="97.959,84.912 106.293,88.361 108.592,89.222 
          108.592,65.371 101.695,77.728 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="103.132,159.915 137.903,137.501 109.166,146.122 
          104.856,156.179 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="122.673,168.536 140.202,137.213 103.132,161.065 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="132.731,103.591 124.397,122.557 163.479,103.591 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="123.535,167.962 132.156,164.226 143.076,159.053 
          142.501,154.742 140.777,137.213 132.156,152.731 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="118.937,87.786 131.294,101.579 120.948,72.268 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="145.088,185.491 143.651,165.95 143.076,159.915 
          133.305,164.226 123.535,169.111 134.455,177.157 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="110.029,64.796 118.362,86.061 120.374,70.831 
          115.776,67.957 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="107.73,113.649 111.753,103.591 118.075,88.361 
          112.327,89.51 109.454,90.085 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="109.454,89.51 118.075,87.498 113.764,76.578 
          109.454,65.946 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="76.406,70.831 96.522,83.762 95.373,81.464 89.625,69.107 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="119.799,186.353 112.902,184.054 109.454,182.905 
          107.442,219.688 115.201,198.997 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="119.224,185.491 114.052,178.019 103.132,163.364 
          109.166,182.043 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="129.282,198.135 120.661,186.928 109.454,216.527 
          107.73,221.125 133.593,203.595 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="126.983,222.562 162.042,220.838 134.455,204.17 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="108.017,221.699 126.121,222.562 133.593,204.457 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="71.808,162.502 89.625,184.629 101.695,161.639 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="30.715,186.64 57.153,183.192 62.9,145.26 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="58.015,183.192 68.647,185.491 68.935,181.755 
          70.659,163.938 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="90.2,184.916 108.304,182.043 102.27,161.927 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="69.797,179.744 69.222,185.491 88.763,184.916 
          71.234,163.076 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="162.905,219.975 165.49,205.607 147.099,188.077 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="159.743,129.167 164.341,104.74 141.927,135.489 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="146.524,186.64 147.961,188.077 165.49,204.457 
          161.755,184.629 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="162.905,184.054 184.457,184.916 172.675,173.422 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="173.25,172.847 185.032,184.629 185.894,164.801 
          177.273,170.26 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="61.176,146.409 40.485,161.927 25.255,173.709 
          26.692,178.019 29.853,186.353 51.98,157.904 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="182.446,148.133 176.123,158.191 185.894,163.364 
          183.882,145.834 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="175.836,149.857 176.123,146.122 163.192,144.397 
          175.261,157.616 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="183.595,145.26 176.986,146.122 176.123,156.754 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="175.261,158.478 162.905,145.26 172.675,171.41 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="175.549,170.548 185.319,164.226 175.836,158.766 
          173.25,171.985 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="168.365,161.927 162.33,145.834 162.33,183.48 
          172.387,172.559 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="37.037,112.212 18.358,135.489 33.876,130.891 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="152.559,28.588 127.558,29.45 91.924,66.808 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="107.155,49.853 126.696,29.45 109.454,27.438 91.062,66.52 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="108.017,28.875 94.798,41.807 90.775,65.658 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="92.499,51.29 93.936,43.243 75.832,70.256 89.338,68.245 	
          "/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="75.257,70.831 56.865,88.361 96.522,84.625 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="95.373,85.487 56.578,89.222 64.624,100.142 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="141.352,60.486 153.134,30.312 122.385,69.394 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="144.513,87.498 159.743,85.774 163.479,64.221 
          151.984,78.015 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="144.8,88.073 164.341,102.442 160.031,86.349 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="161.468,35.772 154.571,28.875 142.501,59.049 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="142.214,60.486 163.766,62.497 161.755,36.634 
          151.984,48.703 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="16.346,137.788 8.012,146.697 10.024,159.628 
          13.472,148.421 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="17.208,137.788 10.312,161.065 24.393,172.272 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="26.404,165.663 33.589,131.753 22.956,134.627 
          17.783,136.351 24.968,171.985 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="24.68,174.284 20.944,179.169 17.208,184.054 29.278,186.64 
          27.266,180.319 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="24.105,173.422 10.599,162.214 13.76,179.456 
          18.932,176.295 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="64.337,100.718 56.578,90.085 59.164,110.775 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="23.531,174.571 22.381,175.146 14.047,180.031 
          16.634,183.767 18.071,182.043 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="49.681,131.466 50.83,128.88 58.302,112.212 38.186,111.35 
          43.934,121.408 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="50.256,99.855 38.474,110.775 58.302,111.637 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="55.716,89.797 50.543,99.281 58.302,110.775 	"/>
        <polygon fill="none" stroke="#63C4AE" strokeMiterlimit="10" points="34.738,130.891 49.106,131.753 37.899,112.212 35.6,126.006 
            "/>
      </g>
    </svg>	
    )
  }
}


export default NotFoundAnimate;