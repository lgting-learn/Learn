/**
 * 存储localStorage
 */
let qs = require('qs');

//函数防抖
export const debounce = (fn, wait) => {
  let timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
//函数节流
export const throttle = (fn, delay) => {
  var prev = Date.now();
  return function () {
    var now = Date.now();
    if (now - prev > delay) {
      fn();
      prev = Date.now();
    }
  };
}


// 修复输入法导致的布局样式被压缩 (元页面高度，重新赋值高度的元素类名)
export const amendHeight = (oldHeight, className) => {
  //高度变化 监听页面重绘事件
  window.onresize = function () {
    // 定义窗口大小变更通知事件
    let newHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //窗口高度

    if (oldHeight > newHeight) {
      $("." + className).height(oldHeight);
    }
  };
}
export const invoke = (serviceName, query) => {
  if (query) {
    let data = qs.stringify(data)
    this.$axios.post(serviceName, data).then(res => {
      return res.data;
    })
  }
}

export const isNotBlank = (str) => {
  // "" 0==''=>true
  if (str == null || str === "" || typeof (str) == 'undefined') {
    return false;
  }
  return true;
}

//防止xss注入  <>'"!＆＃()%\
export const preventXSS = (str) => { //返回false则有特殊字符
  if (str.indexOf('<') > -1 || str.indexOf('>') > -1 || str.indexOf('\'') > -1 || str.indexOf('"') > -1 || str.indexOf('!') > -1 || str.indexOf('&') > -1 || str.indexOf('#') > -1 || str.indexOf('(') > -1 || str.indexOf(')') > -1 || str.indexOf('%') > -1 || str.indexOf('\\') > -1) {
    return false;
  }
  return true
}

export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

// 记录历史记录
export const setHistory = (context) => {
  // 当前页面名称
  let currentPageName = '';
  if (context && context.$route && context.$route.name) {
    currentPageName = context.$route.name;
  } else {
    // TODO 页面名称为空怎么办
  }
  // 第一层导航：四个tab
  let firNavArr = ['index', 'search', 'order', 'mine'];
  let backHistoryArr = (getStore("backHistoryArr") && JSON.parse(getStore("backHistoryArr"))) || [];
  // 1、当前页为第一层导航，重置历史记录数组
  if (firNavArr.includes(currentPageName)) {
    setStore("backHistoryArr", [currentPageName]);
  } else if (backHistoryArr.includes(currentPageName)) { // 2、当前页已存在于数组中：直接截取[0,当前页第一次出现]
    // 找到当前页在数组中第一次出现的位置
    let firIndex = backHistoryArr.indexOf(currentPageName);
    backHistoryArr = backHistoryArr.splice(0, firIndex + 1);
    setStore("backHistoryArr", backHistoryArr);
    // 当前页为shop，记录参数
    debugger
    if ("shop" == currentPageName) {
      setStore("shopConfigQuery", context.$route.query);
    }
  } else {
    backHistoryArr.push(currentPageName);
    setStore("backHistoryArr", backHistoryArr);
  }
}

// 返回上一页
export const back = (context) => {
  // 当前页面名称
  let currentPageName = '';
  if (context && context.$route && context.$route.name) {
    currentPageName = context.$route.name;
  } else {
    // TODO 页面名称为空怎么办
  }

  let obj = {};
  let historyArr = (getStore("backHistoryArr") && JSON.parse(getStore("backHistoryArr"))) || [];
  if (historyArr.length == 0) {
    return;
  }

  if ("food" == historyArr[historyArr.length - 2]) {
    // 返回时，倒数第二个元素是food页面，表示返回的是food页面
    obj = {
      title: context.$route.query.title,
      category: context.$route.query.category,
    }
  } else if ("shop" == historyArr[historyArr.length - 2]) {
    let shopConfigQuery = getStore("shopConfigQuery") && JSON.parse(getStore("shopConfigQuery")) || "";
    if (isNotBlank(shopConfigQuery)) {
      obj = {
        restaurant_id: shopConfigQuery.restaurant_id || "",
        restaurant_name: shopConfigQuery.restaurant_name || "",
        user_id: shopConfigQuery.user_id || "",
        title: shopConfigQuery.title || "",
        category: shopConfigQuery.category || "",
        skeleton_loading: shopConfigQuery.skeleton_loading || "",
      };
      // 赋值之后移除
      removeStore("shopConfigQuery");
    }
  }
  // 历史记录数组存在该页面
  if (historyArr.includes(currentPageName)) {
    // 返回截取内容
    historyArr = historyArr.splice(0, historyArr.length - 1);
    // 重置历史记录数组
    setStore("backHistoryArr", historyArr);
  }
  context.$router.replace({
    name: historyArr[historyArr.length - 1], query: obj,
  });

}
/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target;
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop;
  } else if (element.currentStyle) {
    target = element.currentStyle[attr];
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr];
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

/**
 * 页面到达底部，加载更多
 */
export const loadMore = (element, callback) => {
  let windowHeight = window.screen.height;
  let height;
  let setTop;
  let paddingBottom;
  let marginBottom;
  let requestFram;
  let oldScrollTop;

  document.body.addEventListener('scroll', () => {
    loadMore();
  }, false)
  //运动开始时获取元素 高度 和 offseTop, pading, margin
  element.addEventListener('touchstart', () => {
    height = element.offsetHeight;
    setTop = element.offsetTop;
    paddingBottom = getStyle(element, 'paddingBottom');
    marginBottom = getStyle(element, 'marginBottom');
  }, {passive: true})

  //运动过程中保持监听 scrollTop 的值判断是否到达底部
  element.addEventListener('touchmove', () => {
    loadMore();
  }, {passive: true})

  //运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
  element.addEventListener('touchend', () => {
    oldScrollTop = document.body.scrollTop;
    moveEnd();
  }, {passive: true})

  const moveEnd = () => {
    requestFram = requestAnimationFrame(() => {
      if (document.body.scrollTop != oldScrollTop) {
        oldScrollTop = document.body.scrollTop;
        loadMore();
        moveEnd();
      } else {
        cancelAnimationFrame(requestFram);
        //为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
        height = element.offsetHeight;
        loadMore();
      }
    })
  }

  const loadMore = () => {
    if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
      callback();
    }
  }
}

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
export const showBack = callback => {
  let requestFram;
  let oldScrollTop;

  document.addEventListener('scroll', () => {
    showBackFun();
  }, false)
  document.addEventListener('touchstart', () => {
    showBackFun();
  }, {passive: true})

  document.addEventListener('touchmove', () => {
    showBackFun();
  }, {passive: true})

  document.addEventListener('touchend', () => {
    oldScrollTop = document.body.scrollTop;
    moveEnd();
  }, {passive: true})

  const moveEnd = () => {
    requestFram = requestAnimationFrame(() => {
      if (document.body.scrollTop != oldScrollTop) {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
      } else {
        cancelAnimationFrame(requestFram);
      }
      showBackFun();
    })
  }

  //判断是否达到目标点
  const showBackFun = () => {
    if (document.body.scrollTop > 500) {
      callback(true);
    } else {
      callback(false);
    }
  }
}


/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
  clearInterval(element.timer);

  //判断不同参数的情况
  if (duration instanceof Function) {
    callback = duration;
    duration = 400;
  } else if (duration instanceof String) {
    mode = duration;
    duration = 400;
  }

  //判断不同参数的情况
  if (mode instanceof Function) {
    callback = mode;
    mode = 'ease-out';
  }

  //获取dom样式
  const attrStyle = attr => {
    if (attr === "opacity") {
      return Math.round(getStyle(element, attr, 'float') * 100);
    } else {
      return getStyle(element, attr);
    }
  }
  //根字体大小，需要从此将 rem 改成 px 进行运算
  const rootSize = parseFloat(document.documentElement.style.fontSize);

  const unit = {};
  const initState = {};

  //获取目标属性单位和初始样式值
  Object.keys(target).forEach(attr => {
    if (/[^\d^\.]+/gi.test(target[attr])) {
      unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
    } else {
      unit[attr] = 'px';
    }
    initState[attr] = attrStyle(attr);
  });

  //去掉传入的后缀单位
  Object.keys(target).forEach(attr => {
    if (unit[attr] == 'rem') {
      target[attr] = Math.ceil(parseInt(target[attr]) * rootSize);
    } else {
      target[attr] = parseInt(target[attr]);
    }
  });


  let flag = true; //假设所有运动到达终点
  const remberSpeed = {};//记录上一个速度值,在ease-in模式下需要用到
  element.timer = setInterval(() => {
    Object.keys(target).forEach(attr => {
      let iSpeed = 0;  //步长
      let status = false; //是否仍需运动
      let iCurrent = attrStyle(attr) || 0; //当前元素属性址
      let speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
      let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
      switch (mode) {
        case 'ease-out':
          speedBase = iCurrent;
          intervalTime = duration * 5 / 400;
          break;
        case 'linear':
          speedBase = initState[attr];
          intervalTime = duration * 20 / 400;
          break;
        case 'ease-in':
          let oldspeed = remberSpeed[attr] || 0;
          iSpeed = oldspeed + (target[attr] - initState[attr]) / duration;
          remberSpeed[attr] = iSpeed
          break;
        default:
          speedBase = iCurrent;
          intervalTime = duration * 5 / 400;
      }
      if (mode !== 'ease-in') {
        iSpeed = (target[attr] - speedBase) / intervalTime;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      }
      //判断是否达步长之内的误差距离，如果到达说明到达目标点
      switch (mode) {
        case 'ease-out':
          status = iCurrent != target[attr];
          break;
        case 'linear':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
          break;
        case 'ease-in':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
          break;
        default:
          status = iCurrent != target[attr];
      }

      if (status) {
        flag = false;
        //opacity 和 scrollTop 需要特殊处理
        if (attr === "opacity") {
          element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
          element.style.opacity = (iCurrent + iSpeed) / 100;
        } else if (attr === 'scrollTop') {
          element.scrollTop = iCurrent + iSpeed;
        } else {
          element.style[attr] = iCurrent + iSpeed + 'px';
        }
      } else {
        flag = true;
      }

      if (flag) {
        clearInterval(element.timer);
        if (callback) {
          callback();
        }
      }
    })
  }, 20);
}
