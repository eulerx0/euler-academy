/**
 * Euler Academy — Shared Canvas 2D Coordinate & Plotting Primitives
 * Reusable across Math & Physics interactive visual laboratories.
 */
(function (global) {
  'use strict';

  function createPlane(width, height, opts) {
    const originX = opts.originX;
    const originY = opts.originY;
    const scaleX = opts.scaleX != null ? opts.scaleX : opts.scale;
    const scaleY = opts.scaleY != null ? opts.scaleY : opts.scale;
    return {
      W: width,
      H: height,
      originX,
      originY,
      scaleX,
      scaleY,
      toPxX: (x) => originX + x * scaleX,
      toPxY: (y) => originY - y * scaleY
    };
  }

  function drawGrid(ctx, plane, opts = {}) {
    const xMin = opts.xMin != null ? opts.xMin : -1;
    const xMax = opts.xMax != null ? opts.xMax : 6;
    const xStep = opts.xStep || 1;
    const yMin = opts.yMin != null ? opts.yMin : xMin;
    const yMax = opts.yMax != null ? opts.yMax : xMax;
    const yStep = opts.yStep || 1;

    ctx.save();
    ctx.strokeStyle = opts.color || '#111827';
    ctx.lineWidth = opts.lineWidth || 1;
    for (let x = xMin; x <= xMax + 1e-9; x += xStep) {
      const px = plane.toPxX(x);
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, plane.H);
      ctx.stroke();
    }
    for (let y = yMin; y <= yMax + 1e-9; y += yStep) {
      const py = plane.toPxY(y);
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(plane.W, py);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawAxes(ctx, plane, opts = {}) {
    ctx.save();
    ctx.strokeStyle = opts.color || '#334155';
    ctx.lineWidth = opts.lineWidth || 1.8;
    ctx.beginPath();
    ctx.moveTo(0, plane.originY);
    ctx.lineTo(plane.W, plane.originY);
    ctx.moveTo(plane.originX, 0);
    ctx.lineTo(plane.originX, plane.H);
    ctx.stroke();
    ctx.restore();
  }

  function plotCurve(ctx, plane, fn, xMin, xMax, opts = {}) {
    const step = opts.step || 0.02;
    ctx.save();
    ctx.strokeStyle = opts.color || '#22d3ee';
    ctx.lineWidth = opts.lineWidth || 3;
    if (opts.dash) ctx.setLineDash(opts.dash);
    ctx.beginPath();
    let started = false;
    for (let x = xMin; x <= xMax + step * 0.25; x += step) {
      const clampedX = Math.min(x, xMax);
      const y = fn(clampedX);
      if (!Number.isFinite(y)) {
        started = false;
        continue;
      }
      const px = plane.toPxX(clampedX);
      const py = plane.toPxY(y);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
    ctx.restore();
  }

  function plotInverseCurve(ctx, plane, fn, xMin, xMax, opts = {}) {
    const step = opts.step || 0.02;
    ctx.save();
    ctx.strokeStyle = opts.color || '#fbbf24';
    ctx.lineWidth = opts.lineWidth || 3;
    ctx.beginPath();
    let started = false;
    for (let x = xMin; x <= xMax + step * 0.25; x += step) {
      const clampedX = Math.min(x, xMax);
      const y = fn(clampedX);
      if (!Number.isFinite(y)) {
        started = false;
        continue;
      }
      const px = plane.toPxX(y);
      const py = plane.toPxY(clampedX);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawLine(ctx, plane, x1, y1, x2, y2, opts = {}) {
    ctx.save();
    ctx.strokeStyle = opts.color || '#64748b';
    ctx.lineWidth = opts.lineWidth || 1.5;
    if (opts.dash) ctx.setLineDash(opts.dash);
    ctx.beginPath();
    ctx.moveTo(plane.toPxX(x1), plane.toPxY(y1));
    ctx.lineTo(plane.toPxX(x2), plane.toPxY(y2));
    ctx.stroke();
    ctx.restore();
  }

  function drawProjections(ctx, plane, x, y, opts = {}) {
    ctx.save();
    ctx.strokeStyle = opts.color || '#64748b';
    ctx.lineWidth = opts.lineWidth || 1.4;
    ctx.setLineDash(opts.dash || [4, 4]);
    ctx.beginPath();
    ctx.moveTo(plane.toPxX(x), plane.originY);
    ctx.lineTo(plane.toPxX(x), plane.toPxY(y));
    ctx.lineTo(plane.originX, plane.toPxY(y));
    ctx.stroke();
    ctx.restore();
  }

  function drawPoint(ctx, plane, x, y, opts = {}) {
    const px = plane.toPxX(x);
    const py = plane.toPxY(y);
    const r = opts.radius != null ? opts.radius : 6;
    ctx.save();
    ctx.fillStyle = opts.fill || '#34d399';
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fill();
    if (opts.stroke !== false) {
      ctx.strokeStyle = opts.stroke || '#ffffff';
      ctx.lineWidth = opts.strokeWidth != null ? opts.strokeWidth : 2;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawHalfTangentArrow(ctx, plane, x1, y1, x2, y2, color) {
    const p1x = plane.toPxX(x1);
    const p1y = plane.toPxY(y1);
    const p2x = plane.toPxX(x2);
    const p2y = plane.toPxY(y2);
    const angle = Math.atan2(p2y - p1y, p2x - p1x);
    const headLen = 10;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(p2x, p2y);
    ctx.lineTo(p2x - headLen * Math.cos(angle - Math.PI / 6), p2y - headLen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(p2x - headLen * Math.cos(angle + Math.PI / 6), p2y - headLen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawLabel(ctx, text, pxX, pxY, opts = {}) {
    ctx.save();
    ctx.font = opts.font || 'bold 11px monospace';
    ctx.fillStyle = opts.color || '#e2e8f0';
    ctx.fillText(text, pxX, pxY);
    ctx.restore();
  }

  global.EulerCanvas = {
    createPlane,
    drawGrid,
    drawAxes,
    plotCurve,
    plotInverseCurve,
    drawLine,
    drawProjections,
    drawPoint,
    drawHalfTangentArrow,
    drawLabel
  };
})(window);
