/* 中文转述依据随附的 59 页 PDF。依赖箭头从前提指向使用它的结果。
   directions 是对当前证明所用方法的人工占比估计。直接引用只记录为依赖，不继承其证明方向。 */
const VP = {
  "meta": {
    "title": "欧氏波方程的局部光滑",
    "titleEn": "Local smoothing for the Euclidean wave equation",
    "authors": [
      "OpenAI"
    ],
    "date": "2026 年 10 月 25 日",
    "pages": 59,
    "sourceFile": "paper.pdf",
    "abstract": "论文从一个临界频率环带估计出发，得到欧氏波方程的局部光滑。四元数行列式决定临界指数，两次圆环比较决定对数损失。球面延拓与薄壳乘子估计把结果分别传到 Kakeya 几何和 Bochner–Riesz 求和。",
    "rule": "各节点用中文转述原文并链接对应 PDF 页。关键假设、指数与依赖已经复核。Lean 的覆盖范围见文末链接。"
  },
  "directions": {
    "harmonic": "调和分析",
    "hyperbolic": "双曲偏微分方程与复时空",
    "quaternionic": "四元数线性代数",
    "elliptic": "椭圆偏微分方程",
    "variational": "几何分析与变分方法",
    "potential": "位势理论",
    "probability": "概率（随机化）",
    "geometric": "几何测度论与 Kakeya 几何"
  },
  "sections": [
    {
      "id": "s1",
      "number": "1",
      "title": "引言与主要结果",
      "page": 1,
      "short": "引言",
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "s2",
      "number": "2",
      "title": "波叠加的守恒流",
      "page": 6,
      "short": "守恒流",
      "directions": {
        "hyperbolic": 65,
        "quaternionic": 25,
        "harmonic": 10
      }
    },
    {
      "id": "s3",
      "number": "3",
      "title": "行列式与分部积分",
      "page": 10,
      "short": "行列式与余因子",
      "directions": {
        "quaternionic": 100
      }
    },
    {
      "id": "s4",
      "number": "4",
      "title": "行列式能量与边界通量",
      "page": 14,
      "short": "能量与通量",
      "directions": {
        "quaternionic": 60,
        "variational": 30,
        "harmonic": 10
      }
    },
    {
      "id": "s5",
      "number": "5",
      "title": "固定纤维上的能量",
      "page": 18,
      "short": "纤维估计",
      "directions": {
        "harmonic": 50,
        "elliptic": 35,
        "quaternionic": 15
      }
    },
    {
      "id": "s6",
      "number": "6",
      "title": "薄柱体上的传播",
      "page": 21,
      "short": "圆环传播",
      "note": "圆环的径向调和函数也有概率解释。若内圈取值 1、外圈取值 0，函数值等于平面布朗运动从该点出发先碰到内圈的概率。引理 6.1 的证明使用最大值原理和平均值不等式。",
      "directions": {
        "potential": 85,
        "harmonic": 15
      }
    },
    {
      "id": "s7",
      "number": "7",
      "title": "回到欧氏空间与 Sobolev 估计",
      "page": 24,
      "short": "去周期化",
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "s8",
      "number": "8",
      "title": "两个尖锐性障碍",
      "page": 26,
      "short": "端点障碍",
      "directions": {
        "harmonic": 70,
        "geometric": 25,
        "probability": 5
      }
    },
    {
      "id": "s9",
      "number": "9",
      "title": "球面延拓与 Kakeya",
      "page": 27,
      "short": "球面延拓与 Kakeya",
      "note": "第 9.2 节证明引理 9.4 时，用独立随机符号把球冠延拓估计转成管重叠估计。推论 9.1 直接使用引理 9.4 的结论。",
      "directions": {
        "geometric": 50,
        "harmonic": 45,
        "probability": 5
      }
    },
    {
      "id": "s10",
      "number": "10",
      "title": "Bochner–Riesz 平均",
      "page": 32,
      "short": "Bochner–Riesz",
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "s11",
      "number": "11",
      "title": "Stein 平方函数",
      "page": 33,
      "short": "Stein 平方函数",
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "s12",
      "number": "12",
      "title": "抛物面与 Schrödinger",
      "page": 36,
      "short": "抛物面与 Schrödinger",
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "sA",
      "number": "A–E",
      "title": "附录",
      "page": 38,
      "short": "附录 A–E",
      "directions": {
        "harmonic": 35,
        "elliptic": 25,
        "quaternionic": 15,
        "hyperbolic": 10,
        "geometric": 10,
        "probability": 5
      }
    }
  ],
  "spine": [
    "n22",
    "dirichlet",
    "n42",
    "n51",
    "n61",
    "n63",
    "t12",
    "t11",
    "n92",
    "c91",
    "c93",
    "t101",
    "t111",
    "c121"
  ],
  "notation": [
    {
      "sym": "U(T)",
      "tex": "U(T)=e^{-iT|D|}",
      "mean": "半波传播子",
      "page": 1
    },
    {
      "sym": "|D|",
      "tex": "|D|=\\sqrt{-\\Delta}",
      "mean": "符号为频率模长的一阶 Fourier 乘子",
      "page": 1
    },
    {
      "sym": "J",
      "tex": "J=(1-\\Delta)^{1/2}",
      "mean": "非齐次 Sobolev 算子",
      "page": 1
    },
    {
      "sym": "I",
      "tex": "I=[1,2]",
      "mean": "单位时间区间",
      "page": 1
    },
    {
      "sym": "p_c",
      "tex": "p_c=\\dfrac{2n}{n-1}",
      "mean": "聚焦波的临界指数",
      "page": 1
    },
    {
      "sym": "s_+(p)",
      "tex": "s_+(p)=\\max\\{0,\\tfrac{n-1}{2}-\\tfrac{n}{p}\\}",
      "mean": "所需最小导数阶",
      "page": 1
    },
    {
      "sym": "P_N",
      "tex": "P_N=\\varphi(D/N)",
      "mean": "频率壳投影",
      "page": 4
    },
    {
      "sym": "H(u)",
      "tex": "H(u)",
      "mean": "四元数 Hessian",
      "page": 11
    },
    {
      "sym": "det A",
      "tex": "\\det A",
      "mean": "Moore 行列式",
      "page": 12
    },
    {
      "sym": "C(A)",
      "tex": "C(A)=(\\det A)A^{-1}",
      "mean": "Moore 余因子。所显示的逆矩阵公式用于正定矩阵",
      "page": 12
    },
    {
      "sym": "B_r^α",
      "tex": "B_r^\\alpha",
      "mean": "Bochner–Riesz 平均",
      "page": 32
    },
    {
      "sym": "G_α",
      "tex": "G_\\alpha",
      "mean": "Stein 平方函数",
      "page": 34
    },
    {
      "sym": "K_δ f",
      "tex": "K_\\delta f",
      "mean": "Kakeya 管平均",
      "page": 27
    },
    {
      "sym": "Eg",
      "tex": "Eg(X)=\\int_{S^{n-1}} e^{iX\\cdot\\omega}g(\\omega)\\,d\\sigma(\\omega)",
      "mean": "球面延拓算子",
      "page": 27
    }
  ],
  "results": [
    {
      "id": "t11",
      "parent": "s1",
      "kind": "theorem",
      "number": "1.1",
      "title": "欧氏局部光滑",
      "page": 1,
      "statement": "设 $n\\ge 2$，$2\\le p<\\infty$，$\\varepsilon>0$。对复值 Schwartz 数据 $f$，\n\\[\\|U(T)f\\|_{L^p(\\mathbb R^n\\times[1,2])}\\le C_{n,p,\\varepsilon}\\|J^{s_+(p)+\\varepsilon}f\\|_{L^p(\\mathbb R^n)},\\qquad s_+(p)=\\max\\{0,(n-1)/2-n/p\\}.\\]\n在 $p=2$ 时可取 $\\varepsilon=0$。",
      "idea": [
        "临界环带上只有对数损失。与 $L^2$ 守恒和环带 $L^\\infty$ 核界插值，得到其他指数上的频率幂。"
      ],
      "steps": [
        {
          "t": "插值",
          "b": "在 $p\\le p_c$ 区间与 $L^2$ 界插值，频率幂为零。对 $p>p_c$，与 $L^\\infty$ 核界插值得到幂 $(n-1)/2-n/p$。见 §7.2，第 24–25 页。"
        },
        {
          "t": "频率求和",
          "b": "任意正 $\\varepsilon$ 使 $2^{-j\\varepsilon}(1+j)^{\\beta(p)}$ 可和。低频以 Mihlin 乘子定理处理，$p=2$ 直接用 Plancherel。见第 25 页。"
        }
      ],
      "pages": [
        1,
        24,
        25
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "t12",
      "parent": "s1",
      "kind": "theorem",
      "number": "1.2",
      "title": "临界环带估计",
      "page": 4,
      "statement": "令 $n\\ge 2$、$p=p_c$、$\\varphi\\in C_c^\\infty(\\mathbb R^n\\setminus\\{0\\})$、$N\\ge 2$、$P_N=\\varphi(D/N)$，\\[\\|U(T)P_N f\\|_{L^p(\\mathbb R^n\\times I)}\\le C_{n,\\varphi}[\\log(2+N)]^{2/p}\\|f\\|_{L^p(\\mathbb R^n)}.\\]",
      "idea": [
        "先对固定角宽的频率帽使用环面估计。有限帽覆盖的数量与频率无关。",
        "把输入按单位立方体局部化。远离传播范围的核快速衰减，因此可以比较局部输出与同一份数据的周期化输出。见 §7.1，第 24 页。"
      ],
      "steps": [
        {
          "t": "有限频率帽",
          "b": "分割光滑环带截断，使用命题 6.3。周期化不增加各个截断核的 L¹ 范数。见第 24 页。"
        },
        {
          "t": "估计远场",
          "b": "当 $|X|\\ge 3$ 时相位无驻点，积分分部给出 $|K_h(T,X)|\\le C_M h^M(1+|X|)^{-M}$。"
        },
        {
          "t": "去周期化",
          "b": "对单位立方体的局部估计求和。放大后的立方体仍然只有有界重叠。"
        }
      ],
      "pages": [
        4,
        24
      ],
      "directions": {
        "harmonic": 100
      },
      "directionNote": "直接调用命题 6.3 的环面估计。本证明用频率帽分解、非驻相核估计和空间局部化去掉周期性。"
    },
    {
      "id": "n21",
      "parent": "s2",
      "kind": "lemma",
      "number": "2.1",
      "title": "守恒、半正定且散度为零的张量",
      "page": 7,
      "statement": "设 $P$ 为实对称常系数的一阶系统，$Pf_{\\rm sys}=0$，且解全纯。用式 (2.3) 的位移定义\n\\[G=\\overline{f_{\\rm sys}(\\mathsf X-iq)},\\quad D_{\\ell a}=\\partial_{w_{\\ell a}}+iV_{\\ell a},\\quad Z_\\ell=\\sum_a G_aD_{\\ell a}.\\]\n张量 $B=\\operatorname{Re}\\sum_{\\ell=1}^2 Z_\\ell\\otimes\\overline{Z_\\ell}$ 实对称、正半定，且逐列无散度。",
      "idea": [
        "对全纯解求导，链式法则与系统方程给出各流场的散度恒等式。实对称性使张量取实部时消去剩余项。"
      ],
      "pages": [
        7
      ],
      "directions": {
        "hyperbolic": 100
      }
    },
    {
      "id": "n22",
      "parent": "s2",
      "kind": "proposition",
      "number": "2.2",
      "title": "波流",
      "page": 9,
      "statement": "对式 (2.1) 的有限波叠加，令 $\\chi=\\sum_{\\kappa,v}V^v\\,\\iota_e(\\overline{u_{\\kappa,v}})\\,m_{\\kappa,v}$。则 $A^0=\\chi\\chi^*$ 在 $Y\\ne 0$ 上光滑、正半定，与 $\\Phi$ 的等值面相切，实表示逐列无散度。\n\\[V_T^v=\\frac{1+W\\cdot v/2}{\\sqrt{2}},\\qquad A^0_{TT}=|\\chi_T|^2.\\]",
      "idea": [
        "角向高斯权重作用在各模式的振幅上。先叠加再取模平方，保留同一帽内的干涉。",
        "§2.4 将时间分量写成两个标量乘子输出的模平方之和。"
      ],
      "steps": [
        {
          "t": "换到波适配坐标",
          "b": "在逆图上识别流场，右乘共同的单位四元数保持 Gram 矩阵。"
        },
        {
          "t": "识别时间分量",
          "b": "由光锥坐标换回物理坐标，时间分量可由帽内的标量乘子恢复。"
        }
      ],
      "pages": [
        9,
        10
      ],
      "directions": {
        "hyperbolic": 55,
        "quaternionic": 30,
        "harmonic": 15
      },
      "directionNote": "用复时空坐标写守恒流，用单位四元数保持 Gram 矩阵，再把时间分量写成 Fourier 乘子输出。"
    },
    {
      "id": "n31",
      "parent": "s3",
      "kind": "lemma",
      "number": "3.1",
      "title": "Hessian 演算",
      "page": 11,
      "statement": "$H(u)$ 为 Hermitian 矩阵且 $\\operatorname{tr}H(u)=\\Delta u$；从实 Hessian 到四元数 Hessian 的线性映射把非负实形式映为非负四元数形式。乘积法则：\\[H(uv)=uH(v)+vH(u)+G(u)G(v)^*+G(v)G(u)^*.\\]对全纯映射 $F$，$H(\\sum_v|F_v|^2)=4J^*J$。",
      "idea": [
        "实正交特征基下 $\\alpha\\ne\\beta$ 的项成对出现，保证 Hermitian 对称。",
        "秩一和 $\\xi\\xi^*$ 非负，与普通梯度乘积法则一致。",
        "在四元数酉变换下协变，实正交变换保持三个实槽位的指标子空间。"
      ],
      "pages": [
        11
      ],
      "directions": {
        "quaternionic": 100
      }
    },
    {
      "id": "n32",
      "parent": "s3",
      "kind": "lemma",
      "number": "3.2",
      "title": "Moore 行列式恒等式",
      "page": 12,
      "statement": "Moore 行列式为 $m$ 次齐次多项式，余因子 $C(A)$ 为 $m-1$ 次多项式：\\[C(A):B=\\left.\\frac{d}{dt}\\det(A+tB)\\right|_{t=0},\\qquad C(A)=(\\det A)A^{-1}\\ (A>0).\\]若 $A\\ge 0$ 则 $C(A)\\ge 0$；$A$ 奇异时 $C(A)$ 消去 $A$ 的像；$\\log\\det$ 在正定矩阵上为凹。",
      "idea": [
        "Moore 行列式等于按四元数重数计数的实特征值之积。",
        "单位四元数向量 $v$ 的压缩公式为 $v^*C(A)v=\\det(A|_{v^\\perp})$。",
        "Schur 补给出 $\\det M=(\\det D)\\sigma$ 及 $M-\\sigma v_0v_0^*\\ge 0$。"
      ],
      "pages": [
        12
      ],
      "directions": {
        "quaternionic": 100
      }
    },
    {
      "id": "n33",
      "parent": "s3",
      "kind": "lemma",
      "number": "3.3",
      "title": "余因子散度",
      "page": 13,
      "statement": "对 $k=3$ 或 $4$ 个槽位以及光滑实函数 $u$，\\[\\sum_{a,\\alpha}\\bar e_\\alpha\\,\\partial_{a\\alpha}C(H(u))_{ab}=0\\qquad(1\\le b\\le m).\\]",
      "idea": [
        "将余因子极化成多线性表达式。对于秩一输入，每个输入方向都在极化余因子的核中。",
        "用指数函数检验常系数多线性微分式。相应符号多项式恒为零，得到一般光滑输入的恒等式。",
        "结论允许完整 Hessian 奇异或不定，可用于式 (4.13) 的 Green 恒等式。"
      ],
      "pages": [
        13
      ],
      "directions": {
        "quaternionic": 100
      }
    },
    {
      "id": "n41",
      "parent": "s4",
      "kind": "lemma",
      "number": "4.1",
      "title": "纤维几何",
      "page": 14,
      "statement": "固定 $z=(T,\\tau)$，空间纤维由 $r=|W|^2/w_0^2+100|Q|^2-1<0$ 描述。$H_{\\rm fib}(r)>0$，完整 Hessian 的四元数零方向同时在 $G(r)^\\perp$ 和 $\\ker H(|\\Phi|^2)$ 中。对闭纤维及 $a<s=|\\tau|<4$，\n\\[H_{\\rm fib}(r)\\ge cs^{-2}I,\\qquad dP\\,dZ\\asymp a^2s^{2d}\\,dW\\,dQ,\\qquad d=n-1.\\]",
      "idea": [
        "设 $J$ 为纤维坐标映射的复 Jacobian，则 $H(r)=4J^*J$。固定 $\\tau$ 后空间块可逆，完整矩阵保留改变 $\\tau$ 而固定 $(W,Q)$ 的零方向。"
      ],
      "pages": [
        14,
        15
      ],
      "directions": {
        "quaternionic": 100
      }
    },
    {
      "id": "dirichlet",
      "parent": "s4",
      "kind": "lemma",
      "number": "(4.8)",
      "title": "纤维上的 Dirichlet 势",
      "page": 15,
      "statement": "设 $B_0=\\lambda|\\Phi|^2$，$\\mu=A_{TT}>0$。逐空间纤维解\n  \\[D_u=H_{\\rm fib}(B_0+u)>0,\\qquad\\det D_u=\\lambda\\mu,\\qquad u|_{\\partial\\Omega_z}=0.\\]",
      "idea": [
        "定理 A.1 给出光滑解与光滑参数依赖。$H_{\\rm fib}(B_0)$ 的秩为一，唯一非零特征值 $\\beta\\asymp\\lambda$。若加入 $\\alpha I$，行列式为 $(\\beta+\\alpha)\\alpha^{n-1}$，因此屏障把密度 $\\mu$ 转成曲率尺度 $\\mu^{1/(n-1)}$。"
      ],
      "pages": [
        15
      ],
      "directions": {
        "quaternionic": 80,
        "harmonic": 20
      },
      "directionNote": "用卷积平滑时间密度，用四元数余因子使密度严格为正，并检查秩一背景。存在性、边界屏障和参数依赖直接使用定理 A.1。"
    },
    {
      "id": "n42",
      "parent": "s4",
      "kind": "proposition",
      "number": "4.2",
      "title": "能量平衡",
      "page": 16,
      "statement": "能量 $F$ 在 $a<|\\tau|<4$ 上光滑。令 $\\rho$ 为 $u/r$ 的边界值，在 $z=(T,\\tau)$ 三个实坐标中，\n\\[\\Delta_z F(z)+\\int_{\\Omega_z}A:\\Sigma\\,d\\zeta=\\int\\rho\\,G(r)^*A_wG(r)\\,\\delta(r)\\,d\\zeta.\\]\n右端用完整梯度。$\\delta(r)d\\zeta=dS_{\\rm fib}/|\\nabla_{\\rm fib}r|$。",
      "idea": [
        "Schur 补分出完整行列式。沿势的线段积分空间行列式所得的修正项，在第二次分部积分时恰好将它抵消。"
      ],
      "steps": [
        {
          "t": "分出完整行列式",
          "b": "用 $A:B=0$ 与 $\\det D_u=\\lambda\\mu$，得到 $A:H(u)=A:\\Sigma+\\lambda^{-1}\\det H(B_0+u)$。见 (4.10)，第 16 页。"
        },
        {
          "t": "用修正项抵消",
          "b": "沿 $B_0+\\theta u$ 积分余因子的微分恒等式，得到 $\\Delta_z E_z(u)$ 正好补回行列式项。见 (4.11)–(4.13)，第 16–17 页。"
        },
        {
          "t": "控制移动侧壁",
          "b": "公共零方向使修正项的法向余因子为零。$A:\\Sigma\\ge0$，所以仅剩的侧壁波通量给出 $\\Delta_z F$ 的上界。见第 17 页。"
        }
      ],
      "pages": [
        16,
        17
      ],
      "directions": {
        "quaternionic": 55,
        "variational": 45
      },
      "directionNote": "沿势函数线段积分并作分部积分，构造抵消项。用四元数 Schur 补和余因子压缩公式分解行列式、处理边界项。"
    },
    {
      "id": "n43",
      "parent": "s4",
      "kind": "lemma",
      "number": "4.3",
      "title": "能量比较",
      "page": 17,
      "statement": "在每个空间纤维上：\\[F=\\frac{n-1}{n+1}X_0+\\frac{1}{\\lambda n(n+1)}\\int_\\Omega G_{\\mathrm{fib}}(u)^*C(D_u)G_{\\mathrm{fib}}(u)\\,d\\zeta,\\]特别地 $\\tfrac{n-1}{n+1}X_0\\le F\\le\\tfrac{n}{n+1}X_0$。",
      "idea": [
        "$B_{\\mathrm{fib}}$ 秩一，沿段的行列式只有两项。",
        "利用 $u=0$ 边界条件分部积分，$C(D_u):D_u=n\\det D_u$ 给出上界。",
        "余项非负且系数为正，得到 $F$ 关于 $X_0$ 的夹逼。"
      ],
      "pages": [
        17
      ],
      "directions": {
        "quaternionic": 100
      },
      "directionNote": "给定能量公式后，用秩一行列式展开、余因子收缩公式和边界分部积分完成比较。"
    },
    {
      "id": "n51",
      "parent": "s5",
      "kind": "proposition",
      "number": "5.1",
      "title": "固定环带（纤维）能量估计",
      "page": 18,
      "statement": "设 $c_1\\le h|\\xi|\\le c_2$，数据在固定小帽内，为环面上的三角多项式，且 $\\|f\\|_2=1$。令 $a=Kh$，$s=|\\tau|$，$g_T=U(T)f$。对充分小的 $h$，\n\\[F(0,\\tau)\\le Ca^2\\|f\\|_{p_c}^{p_c}\\quad(|\\tau|=4a),\\]\n\\[F(T,\\tau)\\ge ca^2\\|g_T\\|_{p_c}^{p_c}\\quad(|\\tau|=2a),\\]\n\\[\\Delta_z F(T,\\tau)\\le Cs^{-2}e^{-cs/h}F(T,\\tau)\\quad(2a\\le s\\le 3).\\]",
      "idea": [
        "壁面活跃区远离频率帽中心，具有固定的高斯衰减。内部恢复代价随帽宽平方变小。"
      ],
      "steps": [
        {
          "t": "估计壁面通量",
          "b": "用平方波的正核平均构造屏障，控制 $u/r$。壁面上 $|W-v|$ 有固定正下界，所以通量带有 $e^{-c_0s/h}$。见 (5.5)–(5.10)。"
        },
        {
          "t": "从内部恢复波",
          "b": "帽宽 $\\gamma$ 足够小时，高斯反演的代价至多为多项式乘 $e^{C\\gamma^2s/h}$，低于壁面的指数衰减。见 (5.11)–(5.12)。"
        },
        {
          "t": "读出临界幂",
          "b": "若半径 $h$ 的小球上 $\\mu\\ge m$，比较给出中心处 $-u\\gtrsim h^2m^{1/(n-1)}$。乘上 $\\mu$ 后出现 $m^{n/(n-1)}$，其中 $m$ 量度波的平方。见第 21 页。"
        }
      ],
      "pages": [
        18,
        19,
        20,
        21
      ],
      "directions": {
        "harmonic": 50,
        "elliptic": 35,
        "quaternionic": 15
      },
      "directionNote": "用 Fourier 乘子估计和反演控制波，用椭圆比较函数控制势深，并用四元数 Hessian 的矩阵估计验证屏障。"
    },
    {
      "id": "n61",
      "parent": "s6",
      "kind": "lemma",
      "number": "6.1",
      "title": "径向调和比较",
      "page": 21,
      "statement": "设 $0<b<1/4$，$D=\\log(3/b)$，连续势 $V\\ge0$ 满足\n\\[\\int_b^3 s\\log(s/b)V(s)\\,ds\\le M,\\qquad\\sup_{1/2\\le s\\le3/2}V(s)\\le M.\\]\n若 $E\\ge0$ 在柱域 $b\\le |\\tau|\\le3$ 上光滑且 $\\Delta_{T,\\tau}E\\le V(|\\tau|)E$，则其圆周平均 $H$ 满足\n\\[H(0,r)\\ge c(M)\\frac{\\log(r/b)}{D^2}\\int_1^2 H(T,b)\\,dT,\\qquad b\\le r\\le1.\\]",
      "idea": [
        "先从内圈向固定半径比较，再跨时间，最后向内圈比较。二维径向调和函数对半径的对数呈线性。",
        "备注 6.2 构造零势的标量超解，说明在 r=2b 时 D⁻² 已是此类比较的最优量级。"
      ],
      "pages": [
        21,
        22,
        23
      ],
      "directions": {
        "potential": 100
      }
    },
    {
      "id": "n63",
      "parent": "s6",
      "kind": "proposition",
      "number": "6.3",
      "title": "环面（周期）估计",
      "page": 23,
      "statement": "设 $0<h\\le1$。在固定环面 $\\mathbb T^n=\\mathbb R^n/(100\\mathbb Z)^n$ 上，$f$ 的 Fourier 支撑在 $c_0/h\\le|\\xi|\\le C_0/h$、且位于一个固定孔径内：\\[\\left(\\int_1^2\\|U(T)f\\|_{L^{p_c}(\\mathbb T^n)}^{p_c}\\,dT\\right)^{1/p_c}\\le C[\\log(2/h)]^{2/p_c}\\|f\\|_{L^{p_c}(\\mathbb T^n)}.\\]",
      "idea": [
        "令 $b=2a=2Kh$。由命题 5.1，观测波受 $H(T,b)$ 控制，初值控制 $H(0,2b)$。用引理 6.1 连接两者。",
        "取 $r=2b=4a$，消去 $a^2$ 并取 $p_c$ 次方根。两个对数来自辅助平面，不来自频率帽的求和。"
      ],
      "steps": [
        {
          "t": "应用引理 6.1",
          "b": "检查命题 5.1 给出的势满足引理 6.1 的假设，然后直接套用其圆周平均下界。"
        },
        {
          "t": "代入消去",
          "b": "取 $r=2b$ 消去 $a^2$，取 $p_c$ 次根。"
        },
        {
          "t": "有限球求和",
          "b": "固定球内有限 Fourier 和给出估计，齐次性归一化。"
        }
      ],
      "pages": [
        23
      ],
      "directions": {
        "harmonic": 100
      },
      "directionNote": "直接调用命题 5.1 和引理 6.1，检查代入条件并组合估计。剩余频率范围用有限 Fourier 和处理。"
    },
    {
      "id": "c71",
      "parent": "s7",
      "kind": "corollary",
      "number": "7.1",
      "title": "精确对数 Sobolev 估计",
      "page": 25,
      "statement": "对 $2<p<\\infty$，$\\delta_p=1/2-1/p$、$\\beta(p)=\\min\\{(n-1)(1-2/p),2/p\\}$、$B_*(p)=\\beta(p)+\\delta_p$，$\\ell_1(r)=\\log(2+r)$、$\\ell_2(r)=\\log(2+\\ell_1(r))$：\\[\\|U(T)f\\|_{L^p}\\lesssim_{p,B,C}\\left\\|J^{s_+(p)}\\ell_1(J)^B\\ell_2(J)^C f\\right\\|_{L^p}.\\]$B>B_*(p)$ 时对任意实数 $C$ 成立；$B=B_*(p)$ 时要求 $C>\\delta_p$；$p=p_c$ 时 $B_*(p_c)=1/2+1/p_c$；$p=2$ 不需对数。",
      "idea": [
        "对高频带应用 Littlewood–Paley 与环带估计。Hölder 将求和化为权重 $(1+j)^{\\beta(p)-B}[\\log(2+j)]^{-C}$ 的 $\\ell^r$ 可和性，其中 $1/r=\\delta_p$。",
        "在 $B=B_*(p)$ 时，恰好需要 $\\sum_{j\\ge2}j^{-1}(\\log j)^{-Cr}<\\infty$。"
      ],
      "pages": [
        25
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "p81",
      "parent": "s8",
      "kind": "proposition",
      "number": "8.1",
      "title": "径向聚焦（尖锐性障碍）",
      "page": 26,
      "statement": "令 $d=n-1$。对充分大的 $N$，存在非零 Schwartz $f_N$，$\\operatorname{supp}\\hat f_N\\subset\\{5N/4<|\\xi|<7N/4\\}$，使\\[\\frac{\\|U(t)f_N\\|_{L^p}}{\\|f_N\\|_{L^p}}\\gtrsim_{n,p}1\\ (2\\le p<p_c),\\ (\\log N)^{1/p_c}\\ (p=p_c),\\ N^{d/2-n/p}\\ (p>p_c).\\]",
      "idea": [
        "给径向频谱乘相位 $e^{it_0|\\xi|}$，使波在 $t_0=3/2$ 聚焦。稍后时刻 $t_0+u$，厚度约 $N^{-1}$ 的球壳上的振幅下界含 $u^{-d/2}$。",
        "球壳体积约为 $N^{-1}u^d$。归一化后的积分为 $\\int_{A/N}^{1/4}u^{d-dp/2}\\,du$，临界时每个二进尺度都贡献同阶。"
      ],
      "pages": [
        26
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "p82",
      "parent": "s8",
      "kind": "proposition",
      "number": "8.2",
      "title": "弱时空集中",
      "page": 27,
      "statement": "对 $2<p\\le p_c$ 及充分大的 $N$，存在频谱支撑在 $5N/4<|\\xi|<7N/4$ 的非零 Schwartz 函数 $g_N$，使\n\\[\\|U(t)g_N\\|_{L^{p,\\infty}(\\mathbb R^n\\times[1,2])}\\gtrsim_{n,p}(\\log N)^{(n-1)(1/2-1/p)}\\|g_N\\|_{L^p(\\mathbb R^n)}.\\]",
      "idea": [
        "附录 C 把初始支撑不交的波包传播到重叠的管簇，并用随机符号估计联合时空弱范数。指数对 2<p≤p_c 为正，因此零阶无损失估计失败。"
      ],
      "pages": [
        27,
        46,
        47
      ],
      "directions": {
        "geometric": 55,
        "harmonic": 35,
        "probability": 10
      },
      "directionNote": "完整证明位于附录 C。这里的颜色与附录 C 对应同一份证明。"
    },
    {
      "id": "n92",
      "parent": "s9",
      "kind": "lemma",
      "number": "9.2",
      "title": "局部球面延拓",
      "page": 28,
      "statement": "若定理 1.2 中的环带损失为 $[\\log(2+N)]^A$，则\n  \\[\\|Eg\\|_{L^{p_c}(B(z,R))}\\lesssim [\\log(2+R)]^A\\|g\\|_{L^{p_c}(S^{n-1})},\\qquad R\\ge2.\\]",
      "idea": [
        "时间调制选出单位宽频壳。放大入射波的焦点后，距离相位的线性项给出球面延拓。$n/p_c=(n-1)/2$ 抵消缩放因子。"
      ],
      "pages": [
        28
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "c91",
      "parent": "s9",
      "kind": "corollary",
      "number": "9.1",
      "title": "球面延拓与 Kakeya 管",
      "page": 27,
      "statement": "设 $n\\ge2$、$R\\ge2$、$z\\in\\mathbb R^n$、$0<\\delta\\le1$。则\n\\[\\|Eg\\|_{L^{p_c}(B(z,R))}\\lesssim[\\log(2+R)]^{2/p_c}\\|g\\|_{L^{p_c}(S^{n-1})},\\]\n\\[\\|K_\\delta f\\|_{L^n(S^{n-1})}\\lesssim[\\log(2/\\delta)]^{4/p_c}\\|f\\|_{L^n(\\mathbb R^n)}.\\]\n每个包含各方向单位线段的集合，Hausdorff 维数为 $n$。",
      "idea": [
        "随机化不交球冠，通过平方和控制管重叠，再由对偶得到最大估计。按覆盖半径分组处理 Hausdorff 维数。",
        "第 31–32 页另用射影变换给出对应的 Nikodym 最大估计。"
      ],
      "pages": [
        27,
        29,
        30,
        31,
        32
      ],
      "directions": {
        "geometric": 100
      },
      "directionNote": "直接调用引理 9.4 的管重叠估计，再用管族离散化、对偶和变尺度 Hausdorff 覆盖推出最大估计与维数结论。"
    },
    {
      "id": "c93",
      "parent": "s9",
      "kind": "corollary",
      "number": "9.3",
      "title": "全局 Fourier 延拓",
      "page": 28,
      "statement": "设 $1<a\\le\\infty$、$b<\\infty$。若 $b>p_c$ 且 $b>\\frac{n+1}{n-1}a'$，球面延拓满足\n\\[\\|Eg\\|_{L^b(\\mathbb R^n)}\\lesssim_{n,a,b}\\|g\\|_{L^a(S^{n-1})}.\\]\n截锥延拓在相同指数下成立。$b=\\infty$ 时，两者对 $1\\le a\\le\\infty$ 都成立。",
      "idea": [
        "用局部对角延拓、Tao 的 ε 去除和插值得到全局球面界。截锥由径向切片、Hausdorff–Young 和 Minkowski 得到。紧抛物面在推论 12.1。"
      ],
      "pages": [
        28,
        29
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "t101",
      "parent": "s10",
      "kind": "theorem",
      "number": "10.1",
      "title": "Bochner–Riesz 平均",
      "page": 32,
      "statement": "设 $n\\ge2$、$1\\le p\\le\\infty$、$\\alpha>\\max\\{0,n|1/p-1/2|-1/2\\}$。则\n\\[\\sup_{r>0}\\|B_r^\\alpha f\\|_p\\lesssim\\|f\\|_p.\\]\n另对 $2\\le p<\\infty$、$\\alpha>s_+(p)$，\n\\[\\left\\|\\sup_{r>0}|B_r^\\alpha f|\\right\\|_p\\lesssim\\|f\\|_p.\\]\n固定半径界在 $p<\\infty$ 时给出范数收敛，最大界给出几乎处处收敛。",
      "idea": [
        "将定理 1.1 重标度到单位频率环带上的长时间估计 (10.3)。时间积分表示薄壳乘子，再按壳宽求和。"
      ],
      "pages": [
        32,
        33
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "t111",
      "parent": "s11",
      "kind": "theorem",
      "number": "11.1",
      "title": "Stein 平方函数",
      "page": 34,
      "statement": "令 $2\\le p<\\infty$。若\\[\\alpha>\\max\\left\\{\\frac12,\\ n\\left(\\frac12-\\frac1p\\right)\\right\\},\\]则 $\\|G_\\alpha f\\|_p\\le C_{n,p,\\alpha}\\|f\\|_p$，且 $G_\\alpha$ 延拓到 $L^p(\\mathbb R^n)$。",
      "idea": [
        "一个壳的平方函数在半径 $s$ 处代价为 $\\delta^{-s_+(p)-\\varepsilon}$，结合幂给出 $\\alpha>1/2+s_+(p)$。",
        "组合引理 11.3（Seeger 方法）把各环带界合并，局部项与远场项分别估计。",
        "$p=2$ 时，Plancherel 给出 $\\|G_\\alpha f\\|_2^2=\\frac{\\alpha}{2\\alpha-1}\\|f\\|_2^2$。见第 36 页。"
      ],
      "pages": [
        34,
        35,
        36
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "c121",
      "parent": "s12",
      "kind": "corollary",
      "number": "12.1",
      "title": "抛物面延拓与 Schrödinger 局部光滑",
      "page": 37,
      "statement": "设 $d\\ge1$，$p_c=2(d+1)/d$。若 $1<a\\le\\infty$、$p_c<b<\\infty$ 且 $b>(d+2)a'/d$，紧抛物面延拓满足\n\\[\\|Eg\\|_{L^b(\\mathbb R^{d+1})}\\lesssim\\|g\\|_{L^a(B_d)}.\\]\n在紧时间区间 $I$、$N\\ge2$，若 $\\operatorname{supp}\\widehat f\\subset B(0,N)$，则\n\\[\\|e^{it\\Delta}f\\|_{L^{p_c}(\\mathbb R^d\\times I)}\\lesssim[\\log(2+N)]^{2/p_c}\\|f\\|_{p_c}.\\]\n当 $p_c<p<\\infty$、$p\\le r\\le\\infty$，混合范数 $L^p_x L^r_t$ 所需的 Sobolev 阶为 $d(1-2/p)-2/r$。",
      "idea": [
        "球面小帽经抛物缩放趋向抛物面，临界指数处保持对数幂。Fresnel 公式把局部延拓估计转为带限 Schrödinger 时空估计。"
      ],
      "pages": [
        37,
        38
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "ta1",
      "parent": "sA",
      "kind": "appendix",
      "number": "A.1",
      "title": "周期纤维上的 Dirichlet 问题",
      "page": 38,
      "statement": "在 $(\\mathbb R^m/\\Lambda)\\times V$ 的闭包上，令 $r\\in C^\\infty(\\bar V)$ 为定义函数、$H(r)>0$。给定 $H(B_0)\\ge 0$、$g>\\det H(B_0)$：存在唯一光滑解\\[\\det H(B_0+u)=g,\\quad H(B_0+u)>0,\\quad u|_{\\partial\\Omega}=0,\\]并有 $br\\le u\\le b'r$。对光滑有限维数据与域族，在局部光滑识别后，解对参数光滑依赖到边界。",
      "idea": [
        "连续性方法配合最大值原理给出唯一性。",
        "在平坦周期商域上利用 $H(r)\\ge cI$ 构造屏障。隐函数定理与 Schauder 估计用于连续性方法。",
        "Caffarelli–Nirenberg–Spruck 边界论证给出 $C^{2,\\alpha}$ 估计。"
      ],
      "pages": [
        38,
        39,
        40,
        41
      ],
      "directions": {
        "elliptic": 85,
        "quaternionic": 15
      },
      "directionNote": "用连续性方法、椭圆正则性和边界估计证明可解性，用四元数 Hessian 与余因子公式处理行列式。"
    },
    {
      "id": "tb1",
      "parent": "sA",
      "kind": "appendix",
      "number": "B.1",
      "title": "带角正则的尖锐对数",
      "page": 41,
      "statement": "设 $p=p_c$、$B>1/2+1/p$，令 $L(v)=\\log(2+v)$，$\\Lambda_\\omega=(1-\\Delta_{S^{n-1}})^{1/2}$。则\n\\[\\|U(T)f\\|_{L^p}\\lesssim\\|L(J)^{1/p}f\\|_p+\\|L(\\Lambda_\\omega)^B f\\|_p,\\]\n\\[\\|U(T)f\\|_{L^{p,\\infty}}\\lesssim\\|L(\\Lambda_\\omega)^B f\\|_p.\\]\n左侧均为联合时空范数，角向项可替换为任意正阶角向导数范数。",
      "idea": [
        "先在单环带中分开空间频率和球谐次数，再对频带求和。径向例子表明强估计中的频率对数幂 1/p 已经最优。"
      ],
      "pages": [
        41
      ],
      "directions": {
        "harmonic": 100
      }
    },
    {
      "id": "tc",
      "parent": "sA",
      "kind": "appendix",
      "number": "C",
      "title": "离散包与弱时空范数",
      "page": 46,
      "statement": "附录 C 构造初始支撑不交、传播后在小体积管簇中重叠的波包，证明命题 8.2。",
      "idea": [
        "对初始波包加随机符号以控制输入范数。传播后的重叠压缩输出区域，并保留足够多的波包振幅，产生联合弱时空范数的对数下界。"
      ],
      "pages": [
        46
      ],
      "directions": {
        "geometric": 55,
        "harmonic": 35,
        "probability": 10
      },
      "directionNote": "先构造压缩的管簇，再用 Fourier 分析验证波包传播，用独立随机符号的二阶矩给出弱范数下界。"
    },
    {
      "id": "td",
      "parent": "sA",
      "kind": "appendix",
      "number": "D",
      "title": "二维半波的线性 Dirichlet 问题",
      "page": 48,
      "statement": "$n=2$ 时秩一背景的系数在未知 Hessian 中线性，可在圆盘上用线性辅助 Dirichlet 问题证明 $p_c=4$ 情形：\\[4|J|^2\\Delta_W\\tilde u-4|k\\cdot e|^2\\tilde u=\\tilde\\mu,\\]其中 $k$ 是实空间的 Fourier 频率。每个模态（包括零频）对应圆盘上的 Dirichlet Laplacian 减去光滑非负势。",
      "idea": [
        "余因子对未知 Hessian 线性，无需全非线性行列式方程。",
        "Green 公式给出 $\\Delta_z X_0=-2\\int D_B(H)d\\zeta$，Q 壁无贡献。",
        "固定纤维上两个变量无混合，引理 6.1 与 §7 给出 $O([\\log(2/h)]^{1/2})$ 估计。"
      ],
      "pages": [
        48
      ],
      "directions": {
        "elliptic": 55,
        "quaternionic": 30,
        "harmonic": 15
      },
      "directionNote": "在圆盘上求解线性 Dirichlet 问题、构造比较函数，用四元数余因子写能量，并沿用 Fourier 核估计。圆环比较直接引用引理 6.1。"
    },
    {
      "id": "te1",
      "parent": "sA",
      "kind": "appendix",
      "number": "E.1",
      "title": "对称系统的弯曲特征面",
      "page": 50,
      "statement": "令 $C(\\xi)=\\sum\\xi_j C_j$ 为实对称 $n\\times n$ 矩阵束、$\\varphi(\\xi)=\\lambda_{\\max}(C(\\xi))$，在开锥 $\\Gamma$ 上特征值单重且 $D^2\\varphi$ 在 $\\xi^\\perp$ 正定。对 $b\\in C_c^\\infty(\\Gamma)$、$0<h\\le 1$：\\[\\|e^{-iT\\varphi(D)}b(hD)f\\|_{L^{p_c}(\\mathbb R^n\\times[1,2])}\\le C[\\log(2/h)]^{2/p_c}\\|f\\|_{p_c}.\\]单重最小特征值且横向 Hessian 负定时也成立。例 E.2 给出一个不可约三次弯曲特征面（非二次曲面）。",
      "idea": [
        "取单位顶特征向量为第一状态坐标，$L:\\omega^\\perp\\to e_0^\\perp$ 为同构。",
        "衰减波 $e^{-\\Psi}$ 的固定虚坐标张量给出与 §5 相同的两个高斯估计。",
        "在同一孔径内复用命题 5.1 的核与截断，共轭处理最小特征值。"
      ],
      "pages": [
        50,
        51,
        52,
        53,
        54
      ],
      "directions": {
        "hyperbolic": 40,
        "quaternionic": 25,
        "harmonic": 20,
        "elliptic": 15
      },
      "directionNote": "用对称系统的特征值和极化构造守恒流，在新坐标下计算四元数 Hessian，并实际验证乘子估计和椭圆屏障。"
    }
  ],
  "edges": [
    [
      "n21",
      "n22"
    ],
    [
      "n31",
      "n33"
    ],
    [
      "n32",
      "n33"
    ],
    [
      "n31",
      "n41"
    ],
    [
      "n22",
      "dirichlet"
    ],
    [
      "n41",
      "dirichlet"
    ],
    [
      "n33",
      "dirichlet"
    ],
    [
      "ta1",
      "dirichlet"
    ],
    [
      "n41",
      "n42"
    ],
    [
      "n32",
      "n42"
    ],
    [
      "n33",
      "n42"
    ],
    [
      "dirichlet",
      "n42"
    ],
    [
      "dirichlet",
      "n43"
    ],
    [
      "n33",
      "n43"
    ],
    [
      "n22",
      "n51"
    ],
    [
      "n41",
      "n51"
    ],
    [
      "n42",
      "n51"
    ],
    [
      "n43",
      "n51"
    ],
    [
      "ta1",
      "n51"
    ],
    [
      "n51",
      "n63"
    ],
    [
      "n61",
      "n63"
    ],
    [
      "n63",
      "t12"
    ],
    [
      "t12",
      "t11"
    ],
    [
      "t12",
      "c71"
    ],
    [
      "tc",
      "p82"
    ],
    [
      "t12",
      "tb1"
    ],
    [
      "t12",
      "n92"
    ],
    [
      "n92",
      "c91"
    ],
    [
      "n92",
      "c93"
    ],
    [
      "n92",
      "c121"
    ],
    [
      "t11",
      "t101"
    ],
    [
      "t11",
      "t111"
    ],
    [
      "n22",
      "td"
    ],
    [
      "n33",
      "td"
    ],
    [
      "n61",
      "td"
    ],
    [
      "n21",
      "te1"
    ],
    [
      "n42",
      "te1"
    ],
    [
      "n51",
      "te1"
    ],
    [
      "n61",
      "te1"
    ]
  ]
};
