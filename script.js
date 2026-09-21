  const buttons = document.querySelectorAll('.item-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const itemBox = e.target.closest('.items');
      const itemName = itemBox.querySelector('p').textContent;

      // 💡 指定されたアイテム名に応じてページを完全に振り分けます
      if (itemName.includes('アイアンソード') || 
          itemName.includes('ホーリーバスター') || 
          itemName.includes('バフ装備') || 
          itemName.includes('耐性上昇') || 
          itemName.includes('属性') || 
          itemName.includes('固有スキル')) {
        
        window.location.href = 'weapon.html'; // 💡 weapon.htmlへ（スペルを統一）

      } else if (itemName.includes('怒りのうでわ') || 
                 itemName.includes('イタリオンリング')) {
        
        window.location.href = 'accessories.html'; // 💡 accessories.htmlへ
        
      } else {
        // 今後ほかのアドオンが増えた場合の予備
        window.location.href = 'item.html';
      }
    });
  });
