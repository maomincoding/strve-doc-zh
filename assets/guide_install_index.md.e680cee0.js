import{_ as s,c as n,o as a,a as l}from"./app.3246f872.js";const E=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"CDN","slug":"cdn"},{"level":2,"title":"\u5305\u7BA1\u7406\u5668","slug":"\u5305\u7BA1\u7406\u5668"},{"level":3,"title":"Npm","slug":"npm"},{"level":3,"title":"Yarn","slug":"yarn"},{"level":2,"title":"\u547D\u4EE4\u884C\u5DE5\u5177","slug":"\u547D\u4EE4\u884C\u5DE5\u5177"},{"level":2,"title":"\u5BF9\u4E0D\u540C\u6784\u5EFA\u7248\u672C\u7684\u89E3\u91CA","slug":"\u5BF9\u4E0D\u540C\u6784\u5EFA\u7248\u672C\u7684\u89E3\u91CA"}],"relativePath":"guide/install/index.md"}'),p={name:"guide/install/index.md"},o=l(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u7BC7\uFF0C\u6211\u4EEC\u7B80\u5355\u5FEB\u901F\u5730\u4E86\u89E3 Strve.js \u7684\u4F7F\u7528\uFF0C\u90A3\u4E48\u6211\u4EEC\u5728\u8FD9\u4E00\u7BC7\u8BE6\u7EC6\u8BF4\u660E\u4E0B Strve.js \u6709\u54EA\u4E9B\u5B89\u88C5\u65B9\u6CD5\u3002</p><h2 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u60F3\u4F7F\u7528 ES Modules\u3002</p><blockquote><p>\u5982\u679C\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4E86\u4E0A\u9762\u7684 index.html\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5B83\u629B\u51FA\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A ES \u6A21\u5757\u4E0D\u80FD\u901A\u8FC7 <code>file://</code> \u534F\u8BAE\u5DE5\u4F5C\u3002\u4E3A\u4E86\u4F7F\u5176\u5DE5\u4F5C\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u672C\u5730 HTTP \u670D\u52A1\u5668\u901A\u8FC7 <code>http://</code> \u534F\u8BAE\u63D0\u4F9B index.html\u3002</p></blockquote><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">h</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">setData</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">createApp</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/strve-js@5.6.1/dist/strve.full-esm.prod.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#C792EA;">function</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#EEFFFF;">state</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#C792EA;">function</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">h</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;h1 $key&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#EEFFFF;">state</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">                &lt;button onClick=</span><span style="color:#89DDFF;">\${</span><span style="color:#EEFFFF;">add</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&gt;Add&lt;/button&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">		</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#EEFFFF;">(App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">  app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u89C9\u5F97\u4E0A\u8FF0\u65B9\u6CD5\u6709\u70B9\u9EBB\u70E6\uFF0C\u4E3A\u4E86\u66F4\u52A0\u65B9\u4FBF\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 <code>&lt;script&gt;</code> \u6807\u7B7E\u4E2D\u5BFC\u5165\uFF0C\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/strve-js@5.6.1/dist/strve.full.prod.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4F60\u9700\u8981\u901A\u8FC7\u5BF9\u8C61\u89E3\u6784\u6765\u4F7F\u7528\u76F8\u5E94\u7684\u65B9\u6CD5\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span><span style="color:#EEFFFF;"> h</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> setData</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> createApp </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> Strve</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#EEFFFF;">state</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">h</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">			&lt;h1 $key&gt;</span><span style="color:#89DDFF;">\${</span><span style="color:#EEFFFF;">state</span><span style="color:#89DDFF;">.</span><span style="color:#EEFFFF;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">			&lt;button onClick=</span><span style="color:#89DDFF;">\${</span><span style="color:#EEFFFF;">add</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&gt;Add&lt;/button&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">	</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#EEFFFF;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#EEFFFF;">(App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#EEFFFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#EEFFFF;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u4E0A\u9762\u4E24\u79CD\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u90FD\u4F7F\u7528\u4E86\u751F\u4EA7\u7248\u672C\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u5F00\u53D1\u73AF\u5883\u83B7\u5F97\u66F4\u597D\u7684\u4EE3\u7801\u9519\u8BEF\u63D0\u793A\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7528\u5F00\u53D1\u7248\u672C\uFF0C\u53EA\u9700\u8981\u628A\u6587\u4EF6\u540E\u7F00<code>*.prod.js</code>\u4E2D<code>prod</code>\u5B57\u6BB5\u5220\u9664\u5373\u53EF\u3002</p></blockquote><h2 id="\u5305\u7BA1\u7406\u5668" tabindex="-1">\u5305\u7BA1\u7406\u5668 <a class="header-anchor" href="#\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h2><p>\u5728\u7528 Strve.js \u6784\u5EFA\u5927\u578B\u5E94\u7528\u65F6\u63A8\u8350\u4F7F\u7528 \u5305\u7BA1\u7406\u5668 \u5B89\u88C5\u3002</p><p>\u4F7F\u7528\u60A8\u6700\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u5B89\u88C5\u3002</p><h3 id="npm" tabindex="-1">Npm <a class="header-anchor" href="#npm" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> npm install strve-js</span></span>
<span class="line"></span></code></pre></div><h3 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> yarn add strve-js</span></span>
<span class="line"></span></code></pre></div><h2 id="\u547D\u4EE4\u884C\u5DE5\u5177" tabindex="-1">\u547D\u4EE4\u884C\u5DE5\u5177 <a class="header-anchor" href="#\u547D\u4EE4\u884C\u5DE5\u5177" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u6784\u5EFA\u5927\u578B\u5E94\u7528\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 Strve.js \u63D0\u4F9B\u7684\u5B98\u65B9\u9879\u76EE\u811A\u624B\u67B6\u6765\u642D\u5EFA\u9879\u76EE\u3002\u4E3A\u5355\u9875\u9762\u5E94\u7528 (SPA) \u5FEB\u901F\u642D\u5EFA\u7E41\u6742\u7684\u811A\u624B\u67B6\u3002\u5B83\u4E3A\u73B0\u4EE3\u524D\u7AEF\u5DE5\u4F5C\u6D41\u63D0\u4F9B\u4E86\u5F00\u7BB1\u5373\u7528\u7684\u6784\u5EFA\u8BBE\u7F6E\u3002</p><blockquote><p><a href="/strve-doc-zh/tool/createStrveApp/">CreateStrveApp</a></p></blockquote><h2 id="\u5BF9\u4E0D\u540C\u6784\u5EFA\u7248\u672C\u7684\u89E3\u91CA" tabindex="-1">\u5BF9\u4E0D\u540C\u6784\u5EFA\u7248\u672C\u7684\u89E3\u91CA <a class="header-anchor" href="#\u5BF9\u4E0D\u540C\u6784\u5EFA\u7248\u672C\u7684\u89E3\u91CA" aria-hidden="true">#</a></h2><p>\u5728 NPM \u5305\u7684 <code>dist/</code> \u76EE\u5F55\u4F60\u5C06\u4F1A\u627E\u5230\u5F88\u591A\u4E0D\u540C\u7684 Strve.js \u6784\u5EFA\u7248\u672C\u3002\u8FD9\u91CC\u5217\u51FA\u4E86\u5B83\u4EEC\u4E4B\u95F4\u7684\u5DEE\u522B\uFF1A</p><table><thead><tr><th></th><th>ES Module (\u57FA\u4E8E\u6784\u5EFA\u5DE5\u5177\u4F7F\u7528)</th><th>ES Module (\u76F4\u63A5\u7528\u4E8E\u6D4F\u89C8\u5668)</th><th>UMD</th></tr></thead><tbody><tr><td>\u5B8C\u6574\u7248</td><td>-</td><td>strve.full-esm.js</td><td>strve.full.js</td></tr><tr><td>\u5B8C\u6574\u7248(\u751F\u4EA7\u73AF\u5883)</td><td>-</td><td>strve.full-esm.prod.js</td><td>strve.full.prod.js</td></tr><tr><td>\u8FD0\u884C\u65F6\u7248</td><td>strve.runtime-esm.js</td><td>-</td><td>-</td></tr><tr><td>\u8FD0\u884C\u65F6\u7248(\u751F\u4EA7\u73AF\u5883)</td><td>strve.runtime-esm.prod.js</td><td>-</td><td>-</td></tr></tbody></table><p>\u4E0D\u540C\u7684\u7248\u672C\uFF1A</p><ol><li>\u5B8C\u6574\u7248\u672C\uFF1A\u5305\u62EC\u7F16\u8BD1\u5668(\u7528\u4E8E\u5C06\u6A21\u677F\u5B57\u7B26\u4E32\u7F16\u8BD1\u4E3A JavaScript \u5448\u73B0\u51FD\u6570\u7684\u4EE3\u7801)\u548C\u8FD0\u884C\u65F6\u7248\u672C\uFF1B</li><li>\u8FD0\u884C\u65F6\u7248\uFF1A\u7528\u4E8E\u521B\u5EFA\u5B9E\u4F8B\u3001\u6E32\u67D3\u548C\u5904\u7406\u865A\u62DF DOM \u7684\u4EE3\u7801\u3002\u57FA\u672C\u4E0A\uFF0C\u5B83\u662F\u4ECE\u7F16\u8BD1\u5668\u4E2D\u5220\u9664\u6240\u6709\u5176\u4ED6\u5185\u5BB9\uFF1B</li></ol>`,26),t=[o];function e(F,c,r,y,D,d){return a(),n("div",null,t)}var h=s(p,[["render",e]]);export{E as __pageData,h as default};