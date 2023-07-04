import{_ as s,c as n,o as a,a as l}from"./app.3246f872.js";const d=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027","description":"","frontmatter":{},"headers":[],"relativePath":"other/browser/index.md"}'),p={name:"other/browser/index.md"},o=l(`<h1 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" tabindex="-1">\u6D4F\u89C8\u5668\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027" aria-hidden="true">#</a></h1><p>\u7531\u4E8E Strve.js \u9879\u76EE\u6784\u5EFA\u5DE5\u5177\u9ED8\u8BA4\u4F7F\u7528 <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> \u6784\u5EFA\uFF0C\u6240\u4EE5\u9ED8\u8BA4\u6784\u5EFA\u76EE\u6807\u6D4F\u89C8\u5668\u53EF\u4EE5\u652F\u6301\u539F\u751F ESM \u548C\u811A\u672C\u6807\u7B7E\u4E0A\u539F\u751F ESM \u52A8\u6001\u5BFC\u5165\u3002 \u901A\u8FC7\u5B98\u65B9\u63D2\u4EF6<code>@vitejs/plugin-legacy</code> \u53EF\u4EE5\u652F\u6301\u65E7\u7248\u6D4F\u89C8\u5668\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> legacy </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-legacy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#546E7A;font-style:italic;">// options</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#F07178;">strictPort</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">3001</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> [</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#82AAFF;">legacy</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">			</span><span style="color:#F07178;">targets</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ie &gt;= 9</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">			</span><span style="color:#F07178;">additionalLegacyPolyfills</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">regenerator-runtime/runtime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#EEFFFF;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">		</span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">	]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,4),F=[o];function e(t,r,c,y,D,i){return a(),n("div",null,F)}var _=s(p,[["render",e]]);export{d as __pageData,_ as default};
