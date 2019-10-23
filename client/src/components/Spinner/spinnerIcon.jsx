import React from 'react';
import './spinner.css';

const SpinnerIcon = () => (
    <div>
    <svg width="125px" height="125px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ripple" style={{ background: "none" }}>
        <circle cx="50" cy="50" r="17.2876" fill="none" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" stroke="#33EE8B" strokeWidth="10">
            <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1.5" keySplines="0 0.2 0.8 1" begin="-0.75s" repeatCount="indefinite">
            </animate>
            <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.5" keySplines="0.2 0 0.8 1" begin="-0.75s" repeatCount="indefinite">
            </animate>
        </circle>
        <circle cx="50" cy="50" r="35.7384" fill="none" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-width="{{config.width}}" stroke="#24a765" strokeWidth="10">
            <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1.5" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite">
            </animate>
            <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.5" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite">
            </animate>
        </circle>
    </svg>
    </div>
)

export default SpinnerIcon;
